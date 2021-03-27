$(document).ready(function() {
    $("#delete-house-modal").on("show.bs.modal", function(event) {
        var button = $(event.relatedTarget);
        var postId = button.data("id");
        var btnDeletePost = document.getElementById("btn-delete-house");
        var formDelete = document.forms["delete-house-form"];
        btnDeletePost.onclick = function() {
            formDelete.action = "/admin/house/delete/" + postId + "?_method=DELETE";
            formDelete.submit();
        };
    });
    $("#submit-add").onclick(function() {
        var formAdd = document.forms['form-add']
        formAdd.submit();
    })
    $("#submit-update").onclick(function() {
        var formAdd = document.forms['form-update']
        formAdd.submit();
    })
})