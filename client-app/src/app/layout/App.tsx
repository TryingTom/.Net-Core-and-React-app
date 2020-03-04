import React, { useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import ActivityDashBoard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "../layout/LoadingComponent";
import ActivityStore from '../stores/activityStore';
import {observer} from 'mobx-react-lite';

const App = () => {
    const activityStore = useContext(ActivityStore);

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    if (activityStore.loadingInitial) return <LoadingComponent content="loadingActivities..." />;

    return (
        <Fragment>
            <NavBar/>
            <Container style={{ marginTop: "7em" }}>
                <ActivityDashBoard/>
            </Container>
        </Fragment>
    );
};

export default observer(App);
