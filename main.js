$(document).ready(function() {
let width=$(".pan input:eq(0)")
let height=$(".pan input:eq(1)");
let border=$(".pan input:eq(2)");
let borderRadius=$(".pan input:eq(3)");
let padding=$(".pan input:eq(4)");
let margin=$(".pan input:eq(5)");
let backColor=$(".pan input:eq(6)");
let textColor=$(".pan input:eq(7)");
let text=$(".pan input:eq(8)");
let btn=$(".pan button");
let workSpaceDiv=$(".work-space .blank")
btn.click(function(){
    console.log(width);

})
workSpaceDiv.bind("styleDiv",function(event,width,height,border,borderRadius,padding,margin,backColor,textColor,text){
    $(this).text(text);
    $(this).css({
    width:width,
    height:height,
    border:border,
    borderRadius:borderRadius,
    padding:padding,
    margin:margin,
    backgroundColor:backColor,
    color:textColor,
});

})
btn.click(function(){
    workSpaceDiv.trigger("styleDiv",[width.val(),height.val(),border.val(),
        borderRadius.val(),padding.val(),margin.val(),backColor.val(),textColor.val(),text.val()])
})
});
