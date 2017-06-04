 $('button[id=btn_record]').on('click', function() {
     var d = dialog({
         title: '血压记录',
         content: '舒张压<input/>',
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
         cancel: function() {}
     });
     d.show();
 });