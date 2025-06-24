import React, { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../../services/operations/authApi"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import useOnClickOutside from "../../../hooks/useOnClickOutside"

export default function ProfileDropDown({ mobile = false }) {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null

  return (
    <div className={`relative ${mobile ? "w-full" : ""}`} ref={ref}>
      {/* Profile Button */}
      <button
  className="flex w-full items-center justify-between gap-x-2"
  onClick={() => setOpen((prev) => !prev)}
>
  <div className="flex items-center gap-x-2">
    <img
      src={user?.image || "/default-avatar.png"}
      alt={`profile-${user?.firstName}`}
      className="aspect-square w-[30px] rounded-full object-cover"
    />
    <AiOutlineCaretDown
      className={`text-sm text-richblack-50 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    />
  </div>
</button>


      {/* Dropdown Menu */}
      {open && (
        <div
          className={`${
            mobile
              ? "mt-2 flex flex-col gap-y-1 rounded-md bg-richblack-800 p-2 shadow-sm"
              : "absolute top-[118%] right-0 z-[1000] min-w-[150px] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border border-richblack-700 bg-richblack-800"
          }`}
        >
          <Link
            to="/dashboard/my-profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-x-2 py-2 px-3 text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscDashboard className="text-lg" />
            Dashboard
          </Link>

          <button
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="flex items-center gap-x-2 py-2 px-3 text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
