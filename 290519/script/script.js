$(document).ready(function () {

        $("#times").click(function () {

                $("#sec_large").hide()


        })
        $("#sec_small img").click(function () {
                var img = $(this).data("img");


                $("#sec_large .img-large").children().eq(0).attr("src", `..//img/large/${img}`)

                $("#sec_large").show()
        })

        $(".smallest img").click(function () {
                

                var img = $(this).data("img");
                $("#sec_large .img-large").children().eq(0).attr("src", `..//img/large/${img}`)
              

        })
$("#right").click(function(){

       


})


})




