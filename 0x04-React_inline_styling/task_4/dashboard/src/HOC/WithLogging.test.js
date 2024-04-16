/**
 * @jest-environment jsdom
*/

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WithLogging from './WithLogging'; // Adjust the import path as necessary

// Mock component for testing
const DummyComponent = () => <div>Dummy Component</div>;
DummyComponent.displayName = 'DummyComponent';

// Mock Login component
const Login = () => <div>Login Component</div>;

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    // Spy on console.log before each test
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Cleanup and restore console.log after each test
    cleanup();
    consoleSpy.mockRestore();
  });

  it('should log mount and unmount messages with "Component" for a simple HTML element', () => {
    const ElementWithLogging = WithLogging({ WrappedComponent: () => <p>Test Paragraph</p> });
    const { unmount } = render(<ElementWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('should log mount and unmount messages with the component name for the Login component', () => {
    const LoginWithLogging = WithLogging({ WrappedComponent: Login });
    const { unmount } = render(<LoginWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });

  it('should log mount and unmount messages with the component name for any component', () => {
    const DummyWithLogging = WithLogging({ WrappedComponent: DummyComponent });
    const { unmount } = render(<DummyWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith('Component DummyComponent is mounted');

    unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component DummyComponent is going to unmount');
  });
});
