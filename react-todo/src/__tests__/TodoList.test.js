import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('renders TodoList component with initial todos', () => {
  render(<TodoList />);

  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  expect(screen.getByText('Master React Router')).toBeInTheDocument();
});

// New todo
test('allows users to add a new todo', () => {
    render(<TodoList />);
  
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');
  
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);
  
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });
// toggle
  test('allows users to toggle a todo completion status', () => {
    render(<TodoList />);
  
    const todoItem = screen.getByText('Learn React');
  
    fireEvent.click(todoItem);
  
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

//   Delete
  test('allows users to delete a todo', () => {
    render(<TodoList />);
  
    const todoItem = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0];
  
    fireEvent.click(deleteButton);
  
    expect(todoItem).not.toBeInTheDocument();
  });