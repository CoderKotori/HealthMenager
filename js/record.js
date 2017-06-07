 $('button[id=btn_record]').on('click', function() {
     var d = dialog({
         title: '血压记录',
         content: '<label>舒张压 <input autofocus size="10"/>  mmHg<label><br/><br/><label>收缩压 <input size="10"/>  mmHg<label>',
         okValue: '确 定',
         quickClose: true,
         ok: function() {
             var that = this;
             setTimeout(function() {
                 that.title('提交中..');
             }, 2000);
             return false;
         },
         follow: this,
         cancelValue: '取消',
         cancel: function() {
             alert('确定关闭？')
         }
     });
     d.show();
 });