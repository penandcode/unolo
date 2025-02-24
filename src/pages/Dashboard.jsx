import AttendanceCard from "../components/AttendanceCard";
import PieChart from "../components/PieChart";
import RealTimeDashboard from "../components/RealTimeDashboard";
import Table from "../components/Table";
import TabsPanel from "../components/TabsPanel";

const Dashboard = () => {
    const attendanceData = [
        {
            name: "Kumar Viswas",
            attendance: "Never Marked Attendance",
            location: "NA",
            timeAgo: ""
        },
        {
            name: "Mayur Tyagi",
            attendance: "Punched In : Today at 5:14 PM",
            source: "Unolo",
            location: "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram",
            timeAgo: "7 hours ago"
        },
        {
            name: "Mohan Bishnoi (123)",
            attendance: "Punched Out : 19-12-2024",
            location: "Vikas Marg, South City II, Sector 49, Gurugram",
            timeAgo: "2 months ago"
        },
        {
            name: "OM BHAGWAN",
            attendance: "Punched In : Today at 4:27 PM",
            source: "Unolo",
            location: "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram",
            timeAgo: "7 hours ago"
        }
    ];

    const attendanceColumns = {
        name: "Employee",
        attendance: "Attendance",
        location: "Last Location"
    };

    const offDutyEmployees = [
        {
            name: "rahul singh",
            teamName: "default",
            status: "Weekly Off"
        },
    ];
    const offDutyColumns = {
        name: "Employee",
        teamName: "Team Name",
        status: "Status"
    };

    return <>
        {/* <TabsPanel /> */}
        <div className="flex gap-3 flex-wrap p-4">
            <RealTimeDashboard />
            <div className="flex-1">
                <AttendanceCard />
            </div>
        </div>
        <div className="flex gap-3 mt-3 flex-wrap justify-center px-4">
            <Table label={"Employees"} data={attendanceData} columns={attendanceColumns} />
            <Table label={"Off Duty Employees"} data={offDutyEmployees} columns={offDutyColumns} />
        </div>
    </>

}


export default Dashboard;
