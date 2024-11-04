import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex p-4 gap-4 flex-col md:flex-row">
      {/*Left*/}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/*serCards*/}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/*Middle Charts*/}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/*Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/*Attendence Chart */}
          <div className="w-full lg:w-1/3 h-[450px]"></div>
        </div>
        {/*Bottom Charts*/}
        <div></div>
      </div>
      {/*Right*/}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
