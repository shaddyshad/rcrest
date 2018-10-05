import React from 'react';

import {
    Panel,
    HelpBlock,
    Button
} from 'react-bootstrap';

import {Row, Column} from 'simple-flexbox';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {connect} from "react-redux";

const Item = ({text, icon, onClick, count, bg}) => {
    return (
        <Panel style={styles(bg, "#FFFFFF").panel}>
            <Panel.Body>
                <Row vertical='center' horizontal='space-between'>
                    <Column xsHidden md={1}>
                        <FontAwesomeIcon icon={icon} style={{fontSize: "5em"}}/>
                    </Column>
                    <Column xsHidden md={1}>
                        <h2 style={styles.help}>{count ? count : 0}</h2>
                        <p style={styles.help}>{text}</p>
                    </Column>
                </Row>

            </Panel.Body>
            <Panel.Footer>
                <p style={{color: bg}}>View Details <FontAwesomeIcon
                    icon='arrow-circle-right'/>
                </p>
            </Panel.Footer>
        </Panel>
    );
};

const Item2 = ({text, count, bg, cl}) => {
    return (
        <Panel style={styles(bg, cl).panel}>
            <Panel.Body>
                <h2 style={styles.help}>{count ? count : 0}</h2>
                <p style={styles.help}>{text}</p>
            </Panel.Body>
            <Panel.Footer>
                <p style={{color: "#0C7AB9"}}>View Details <FontAwesomeIcon
                    icon='arrow-circle-right'/>
                </p>
            </Panel.Footer>
        </Panel>
    );
};

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
};

const styles = (bg, cl) => {
    return {
        panel: {
            backgroundColor: bg,
            color: cl,
            border: `1px solid ${bg}`

        },
        help: {
            color: cl,
            fontSize: 14
        },
        icon: {
            fontSize: 40
        },
        panel2: {
            color: cl
        }
    }
};

export default connect(mapStateToProps)(Item);

export {
    Item,
    Item2
}