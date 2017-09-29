/* eslint-disable import/no-extraneous-dependencies import/no-unresolved import/extensions */
import React from 'react'
import { configure } from '@storybook/react'

const stories = require.context('../src', true, /__stories__\/(\w+).js$/)

function load() {
  stories.keys().forEach((story) => stories(story))
}

configure(load, module)
