import React from 'react';
import moment from 'moment';

export default function DateTimePretty(DateTime, date) {
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.date = date;
      console.log(this.date);
    }

    convertingRelativeTime() {
      console.log(this.date);
      return moment(this.date).startOf('day').fromNow();
    }

    render() {
      return <DateTime {...this.props} date={this.convertingRelativeTime()}/>
    }
  }
}
