import TabItem from "./TabItem";

const TabsPanel = () => {
    const tabsArr = [
        { label: "Overview" },
        { label: "Live Location" },
        { label: "Timeline" },
        { label: "Card View" },
        { label: "Compliance Status" },
        { label: "Site Attendance" },
    ]
    return <>
        <div className="flex">
            {tabsArr.map((item, index) => <TabItem key={index} label={item.label} />)}
        </div>
    </>
}

export default TabsPanel;