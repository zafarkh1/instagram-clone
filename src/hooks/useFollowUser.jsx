import {useEffect, useState} from "react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import userProfileStore from "../store/userProfileStore";
import {firestore} from "../firebase/firebase";
import {doc, updateDoc, arrayRemove, arrayUnion} from "firebase/firestore";

function UseFollowUser(userId) {
  const [isUpdating, setIsUpdating] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const authUser = useAuthStore(state => state.user)
  const setAuthUser = useAuthStore(state => state.setUser)
  const {userProfile, setUserProfile} = userProfileStore()
  const showToast = useShowToast();

  const handleFollowUser = async () => {
    setIsUpdating(true)
    try {
      const currentUserRef = doc(firestore, "users", userId);
      const userFollowOrUnfollowRef = doc(firestore, "users", authUser.uid)

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId)
      })

      await updateDoc(userFollowOrUnfollowRef, {
        followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
      })

      if (isFollowing) {
        setAuthUser({
          ...authUser, following: authUser.following.filter(uid => uid !== userId)
        })

        setUserProfile({
          ...userProfile, followers: userProfile.followers.filter(uid => uid !== authUser.uid)
        })

        localStorage.setItem("user-info", JSON.stringify({
          ...authUser, following: authUser.following.filter(uid => uid !== userId)
        }))
      } else {
        setAuthUser({
          ...authUser, following: [...authUser.following, userId]
        })

        setUserProfile({
          ...setUserProfile, setUserProfile, followers: [...userProfile.followers, authUser.uid]
        })

        localStorage.setItem("user-info", JSON.stringify({
          ...authUser, following: [...authUser.following, userId]
        }))
        setIsFollowing(true)
      }
    } catch (error) {
      showToast("Error", error.message, "error")
    } finally {
      setIsUpdating(false)
    }
  }

  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userId)
      setIsFollowing(isFollowing)
    }
  })
  return {handleFollowUser, isUpdating, isFollowing}
}

export default UseFollowUser;
