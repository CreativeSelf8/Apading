$(document).ready(function() {
    var quill = new Quill('#editor', {
        modules: {
            toolbar: [
                ['bold', 'italic'],
                ['link', 'blockquote', 'code-block', 'image'],
                [{
                    list: 'ordered'
                }, {
                    list: 'bullet'
                }]
            ]
        },
        placeholder: 'Nhập vào đây',
        theme: 'snow'
    });
    var quillEn = new Quill('#editor-en', {
        modules: {
            toolbar: [
                ['bold', 'italic'],
                ['link', 'blockquote', 'code-block', 'image'],
                [{
                    list: 'ordered'
                }, {
                    list: 'bullet'
                }]
            ]
        },
        placeholder: 'Nhập vào đây',
        theme: 'snow'
    });
    var quillCh = new Quill('#editor-ch', {
        modules: {
            toolbar: [
                ['bold', 'italic'],
                ['link', 'blockquote', 'code-block', 'image'],
                [{
                    list: 'ordered'
                }, {
                    list: 'bullet'
                }]
            ]
        },
        placeholder: 'Nhập vào đây',
        theme: 'snow'
    });
    var quillKo = new Quill('#editor-ko', {
        modules: {
            toolbar: [
                ['bold', 'italic'],
                ['link', 'blockquote', 'code-block', 'image'],
                [{
                    list: 'ordered'
                }, {
                    list: 'bullet'
                }]
            ]
        },
        placeholder: 'Nhập vào đây',
        theme: 'snow'
    });
    var quillJa = new Quill('#editor-ja', {
        modules: {
            toolbar: [
                ['bold', 'italic'],
                ['link', 'blockquote', 'code-block', 'image'],
                [{
                    list: 'ordered'
                }, {
                    list: 'bullet'
                }]
            ]
        },
        placeholder: 'Nhập vào đây',
        theme: 'snow'
    });

    var form = document.forms['editor'];
    form.onsubmit = function() {
        var content = document.querySelector('input[name=content]');
        var contentEn = document.querySelector('input[name=content_en]');
        var contentCh = document.querySelector('input[name=content_ch]');
        var contentKo = document.querySelector('input[name=content_ko]');
        var contentJa = document.querySelector('input[name=content_ja]');

        content.value = quill.root.innerHTML;
        contentEn.value = quillEn.root.innerHTML;
        contentCh.value = quillCh.root.innerHTML;
        contentKo.value = quillKo.root.innerHTML;
        contentJa.value = quillJa.root.innerHTML;
    }
})