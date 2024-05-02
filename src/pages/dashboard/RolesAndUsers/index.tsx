import { Col, Row } from "react-bootstrap";
import OverView from "../Ecommerce/OverView";
import RevenueChart from "../Ecommerce/RevenueChart";
import TargetChart from "../Ecommerce/TargetChart";

const RoleAndUsersDashboard = () => {
    return (
        <>
            <Row>
                <Col xl={3}>
                    <OverView />
                </Col>
                <Col xl={6}>
                    <RevenueChart />
                </Col>
                <Col xl={3}>
                    <TargetChart />
                </Col>
            </Row>
        </>
    );
};

export default RoleAndUsersDashboard;