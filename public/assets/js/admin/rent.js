$(document).ready(function() {
    $("#delete-rent-modal").on("show.bs.modal", function(event) {
        var button = $(event.relatedTarget);
        var postId = button.data("id");
        var btnDeletePost = document.getElementById("btn-delete-rent");
        var formDelete = document.forms["delete-rent-form"];
        btnDeletePost.onclick = function() {
            formDelete.action = "/admin/rent/delete/" + postId + "?_method=DELETE";
            formDelete.submit();
        };
    });
    $("#submit-add").click(function() {
        var formAdd = document.forms['form-add']
        formAdd.submit();
    })
    $("#submit-update").click(function() {
        var formAdd = document.forms['form-update']
        formAdd.submit();
    })
    $("#update-province").change(async function() {
        let id = $("#update-province option:selected").val();
        let districts
        await $.get(`/admin/district/${id}`, function(data) {
            districts = data
            return
        });
        $("#update-district").find('option').remove().end().append("<option value='' disabled selected>Quận/huyện</option>")
        for (let i = 0; i < districts.length; i++) {
            const district = districts[i];
            $("#update-district").append('<option value="' + district.id + '">' + district._name + "</option>");
        }
    })
    $("#update-district").change(async function() {
        let id = $("#update-district option:selected").val();
        let wards;
        await $.get(`/admin/ward/${id}`, function(data) {
            wards = data
            return
        })
        $("#update-ward").find('option').remove().end().append("<option value='' disabled selected>Phường/xã</option>")
        for (let i = 0; i < wards.length; i++) {
            const ward = wards[i];
            $("#update-ward").append('<option value="' + ward.id + '">' + ward._name + "</option>");
        }
    })

    $("#add-province").change(async function() {
        console.log('hi');
        let id = $("#add-province option:selected").val();
        let districts
        await $.get(`/admin/district/${id}`, function(data) {
            districts = data
            return
        });
        $("#add-district").find('option').remove().end().append("<option value='' disabled selected>Quận/huyện</option>")
        for (let i = 0; i < districts.length; i++) {
            const district = districts[i];
            $("#add-district").append('<option value="' + district.id + '">' + district._name + "</option>");
        }
    })
    $("#add-district").change(async function() {
        let id = $("#add-district option:selected").val();
        let wards;
        await $.get(`/admin/ward/${id}`, function(data) {
            wards = data
            return
        })
        $("#add-ward").find('option').remove().end().append("<option value='' disabled selected>Phường/xã</option>")
        for (let i = 0; i < wards.length; i++) {
            const ward = wards[i];
            $("#add-ward").append('<option value="' + ward.id + '">' + ward._name + "</option>");
        }
    })
})