import React, { PureComponent } from 'react';
import { NavModel } from '@grafana/data';
import Page from '../Page/Page';
import { config } from '@grafana/runtime';

interface ConnectedProps {
  navModel: NavModel;
}

type Props = ConnectedProps;

export class ErrorPage extends PureComponent<Props> {
  render() {
    const { navModel } = this.props;
    return (
      <Page navModel={navModel}>
        <Page.Contents>
          <div className="page-container page-body">
            <div className="error-text">
              Oops
              <img src="public/img/exclamation_mark.svg" width="9%" alt="exclamation_mark"></img>
            </div>
            <div className="panel-container error-container">
              <div className="error-column image-box">
                <div className="error-row">
                  <div className="error-column">
                    <img src="public/img/404_error.svg" width="100%" alt="graph" />
                  </div>
                  <div>
                    <h1>We couldn&apos;t find it...</h1>
                    <h6>The page you are looking for does not exist.</h6>
                  </div>
                </div>

                <div>
                  <h3>Sorry for the inconvenience</h3>
                  <p>
                    Please go back to your{' '}
                    <a href={config.appSubUrl} className="error-link">
                      home dashboard
                    </a>{' '}
                    and try again.
                  </p>
                  <p>
                    If the error persists, seek help on the{' '}
                    <a href="https://community.grafana.com" target="_blank" rel="noreferrer" className="error-link">
                      community site
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Page.Contents>
      </Page>
    );
  }
}

// const mapStateToProps: MapStateToProps<ConnectedProps, OwnProps, StoreState> = state => {
//   return {
//     navModel: getNavModel(state.navIndex, 'not-found'),
//   };
// };

export default ErrorPage;
