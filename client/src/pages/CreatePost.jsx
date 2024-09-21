import { useState } from 'react'
import 'quill/dist/quill.snow.css'
import { useLocation } from 'react-router-dom'
import { useQuill } from 'react-quilljs'

const CreatePost = () => {
  const { quill, quillRef } = useQuill()

  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Title' />
        <div className='editorContainer' style={{ height: '350px' }}>
          <div className='editor' ref={quillRef} />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: 'none' }}
            type='file'
            id='file'
            name='file'
          />
          <label className='file' htmlFor='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save as a draft</button>
            <button>Publish</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input type='radio' name='cat' value='developer' id='developer' />
            <label htmlFor='developer'>Developer</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='design' id='design' />
            <label htmlFor='science'>Design</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
