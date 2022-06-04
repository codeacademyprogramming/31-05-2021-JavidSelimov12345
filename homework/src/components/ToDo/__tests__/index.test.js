import React from 'react'
import ReactDOM from 'react-dom'

import Todo from "../../ToDo"

import { getQueriesForElement } from "@testing-library/dom"
import { render,fireEvent } from "@testing-library/react"

const expected=true
const actual = true

function add(x,y){
    return x+y;
}


test ('render test With Render',()=>{
   ;
    const {getByText} =render(<Todo />)
    expect(getByText('Todo App')).not.toBeUndefined()
    
})

test ('Jest-dom test With',()=>{
    const root = document.createElement('div');
    ReactDOM.render(<Todo />,root);
    const {getByText} = getQueriesForElement(root)
    expect(getByText('Todo App')).not.toBeUndefined()
    
})


test ('should  react test',()=>{
    const root = document.createElement('div');
    ReactDOM.render(<Todo />,root);
    expect(root.querySelector('h1').textContent).toBe('Todo App')
    
})


test('should test dummy function',()=>{
     expect(actual).toBe(expected)
})

test('should test dummy function 2',()=>{
    expect(add(1,1)).toBe(2)
})

test('should add todo',()=>{
    const {getByText,getByLabelText} = render(<Todo />)
    fireEvent.change(getByLabelText('What to do'),{target: {value:'Learn react'}})
    fireEvent.click(getByText('Add'))

    expect(getByText('Learn react')).not.toBeUndefined()
})