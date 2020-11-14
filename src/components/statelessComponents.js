import React from 'react';
import { headings } from '../siteData';

export const Days = (props) => {
  return (
    <div>
        <span className="span span--block text---center text--size-large">
            {(props.val) ? props.val : null }
        </span>
        <span className="span span--block text--center">
            {headings.days}
        </span>
    </div>
  )
}

export const Hours = (props) => {
  return (
    <div>
        <span className="span span--block text--center text--size-large">
            {props.val}
        </span>
        <span className="span span--block text--center">
            {headings.hours}
        </span>
    </div>
  )
}

export const Minutes = (props) => {
  return (
    <div>
        <span className="span span--block text--center text--size-large">
            {props.val}
        </span>
        <span className="span span--block text--center">
            {headings.minutes}
        </span>
    </div>
  )
}

export const Seconds = (props) => {
  return (
    <div>
        <span className="span span--block text--center text--size-large">
            {props.val}
        </span>
        <span className="span span--block text--center">
            {headings.seconds}
        </span>
    </div>
  )
}
