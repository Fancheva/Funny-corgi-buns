$.ajax({
  type: "GET",
  url: "https://appcontent.fx2.io/api/content/frontend-test",
  dataType: 'json',
  headers: {
    "Authorization": 'sg6QVn2Mgkwu3yAD3gCAgMW1sE4T9SUo'
  },
  success: function (data){
      function addEl(block,name){
        $(block).append(name)
      }
      addEl('#title',data.data.content.title);
      addEl('#body',data.data.content.body);
      addEl('.modal-title',data.data.content.title);


      for(let i=0;i<data.data.content.pets.length;i++){
        let add_image=`<img class="img-fluid" src="${data.data.content.pets[i].image}" alt="${data.data.content.pets[i].name}">`;
        
        $('.table_id')[i].append(data.data.content.pets[i].id);
        $('.table_name')[i].append(data.data.content.pets[i].name);
        $('.table_desc')[i].append(data.data.content.pets[i].description);
        $('.table_img')[i].innerHTML = add_image;

      }
      $('title').text(data.data.content.title);
      $('meta[name=description]').attr('content', data.data.content.body);
  }
});

$('#btn_strart').click(function(){
  $('#btn_content').css('display','none');
  $('#main_content').css('display','flex');
})