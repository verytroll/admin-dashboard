
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import {userActiveData} from "../../dummyData";
import "./home.css";

export default function Home() {
    return(
        <div className="home">
            <FeaturedInfo />
            <Chart title="User Analytics" data={userActiveData} dataKey="Active User" grid />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
