import Card from "./Card";
import PieChart from "./PieChart";

const RealTimeDashboard = () => {
    return <div className="flex gap-3 flex-wrap">
        <div>
            <PieChart text={"Real Time Status"} label='All Employees' data={[
                { name: 'Punched Out', y: 3, color: '#3266fc' },
                { name: 'Punched In', y: 6, color: '#05d2f1' },
            ]} />
        </div>
        <div className="flex flex-col gap-3">
            <Card label={"Punched In (active) Employees"} value={3} tooltipText={"No. of employees which are working currently."} />
            <Card label={"Staffing Strength"} value={"0/0"} tooltipText={"No. of employees which are working currently."} />
        </div>
    </div>
}

export default RealTimeDashboard;