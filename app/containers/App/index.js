import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../utils/history';
import NotFoundPage from '../NotFoundPage/Loadable';
import DashboardPage from '../DashboardPage/Loadable';
import DashboardStudyListPage from '../DashboardStudyListPage/Loadable';
import DashboardStudyPage from '../DashboardStudyPage/Loadable';
import DashboardSeriesPage from '../DashboardSeriesPage/Loadable';
import DashboardInstancePage from '../DashboardInstancePage/Loadable';
import DashboardViewImagesPage from '../DashboardViewImagesPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path={routes.home} component={DashboardPage} />
        <Route
          exact
          path={routes.studyList}
          render={() => (
            <DashboardPage>
              <DashboardStudyListPage />
            </DashboardPage>
          )}
        />
        <Route
          exact
          path={routes.study}
          render={() => (
            <DashboardPage>
              <DashboardStudyPage />
            </DashboardPage>
          )}
        />
        <Route
          exact
          path={routes.series}
          render={() => (
            <DashboardPage>
              <DashboardSeriesPage />
            </DashboardPage>
          )}
        />
        <Route
          exact
          path={routes.instance}
          render={() => (
            <DashboardPage>
              <DashboardInstancePage />
            </DashboardPage>
          )}
        />
        <Route
          exact
          path={routes.viewImages}
          render={() => (
            <DashboardPage>
              <DashboardViewImagesPage />
            </DashboardPage>
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
