import { useEffect, useRef } from "react";
import Highcharts from "highcharts";

const PieChart = ({ text, label, data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            Highcharts.chart(chartRef.current, {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                },
                title: {
                    text: `${data.reduce((accumulator, current) => accumulator + current.y, 0)} <br /> ${label}`,
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 60,
                    style: {
                        fontSize: '1.1em',
                    },
                },
                accessibility: {
                    point: {
                        valueSuffix: '%',
                    },
                },
                legend: {
                    enabled: true
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: false,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white',
                            },
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%'],
                        size: '110%',
                    },
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    innerSize: '70%',
                    data: data
                }]
            });
        }
    }, []);

    return (
        <div className="h-[350px] w-[400px] bg-[#fff] rounded-lg">
            <p className="font-bold mx-4 py-2 text-xl">{text}</p>
            <div className="h-[2px] w-auto bg-gray-200 mx-4"></div>
            <div className="my-2 flex justify-around">
                {data.map((item) => {
                    return <div>
                        <div className="flex justify-center items-center gap-2">
                            <div className={`h-4 w-4 bg-[${item.color}] rounded-[50%]`}></div>
                            <p className="font-semibold">{item.y}</p>
                        </div>
                        <p className="font-semibold text-md">{item.name}</p>
                    </div>
                })}
            </div>
            <div ref={chartRef} style={{ width: "300px", height: "220px", marginInline: "auto" }} />
        </div>
    );
};

export default PieChart;
