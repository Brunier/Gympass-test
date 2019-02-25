import { configure } from '@storybook/react';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    // You can require as many stories as you need.
    requireAll(require.context("../components", true, /\.story\.js?$/));
}

configure(loadStories, module);
