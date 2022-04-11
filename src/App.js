import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  const editorRef = useRef(null);
  return (
    <>
      <Editor
        apiKey='h9l0388nhx7w55sh7qlvw2r98pws7hs8obyjaen112j6feb3'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          "autoSearch": true,
          "autoDestroy": true,
          "autocorrect": true,
          "autocomplete": true,
          "serviceId": "1:HA5Gl1-qzT7h2-fOLIO1-jdchR-5nVU13-GYHiI-e9dL33-WIm9B-5G5Oo-898DN-cKJmA2-2t1",
          "serviceProtocol": "https",
          "servicePort": "443",
          "serviceHost": "svc.webspellchecker.net",
          "servicePath": "api",
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'spellchecker'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}
