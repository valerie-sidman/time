/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import DateTime from './DateTime';
import DateTimePretty from './DateTimePretty';

export default function Video(props) {
  const ConvertedDate = DateTimePretty(DateTime, props.date)
  return (
      <div className="video">
          <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <ConvertedDate date={props.date} />
      </div>
  )
}
