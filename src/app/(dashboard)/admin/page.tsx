import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return (
      <div className="flex p-4 gap-4 flex-col md:flex-row">
        {/*Left*/}
        <div className="w-full lg:w-2/3">
          {/*serCards*/}
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="student" />
            <UserCard type="teacher" />
            <UserCard type="parent" />
            <UserCard type="staff" />
          </div>
        </div>
        {/*Right*/}
        <div className="w-full lg:w-1/3">R</div>
      </div>
    );
}

export default AdminPage