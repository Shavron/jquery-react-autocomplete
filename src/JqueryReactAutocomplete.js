import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-bundle/jquery-ui";
import "jquery-ui-bundle/jquery-ui.css";


export default function JqueryReactAutocomplete({ inputProps, onSourceSelect }) {
  
  useEffect(() => {
    try {
      var _userFocusOutData = "";
      $("#" + inputProps.id).autocomplete({
        delay: 0,
        autoFocus: true,
        autoFill: true,
        scrollHeight: 220,
        minLength: 2,
        source: function(request, response) {
          $.ajax({
            url: "https://test.railyatri.in/redbus/source-city-list_v2.json",
            dataType: "jsonp",
            data: {
              q: request.term
            },
            success: function(data) {
              _userFocusOutData = data;
              response(
                $.map(data.city_list, function(item) {
                  return {
                    label: item.city_label,
                    value: item.city_name,
                    name: item.city_name,
                    code: item.city_id
                  };
                })
              );
            }
          });
        },
        select: function(event, ui) {
          onSourceSelect(ui.item);
        },
        change: function(event, ui) {
          if (!ui.item) {
            var _topElement = _userFocusOutData.city_list[0];
            onSourceSelect({
              label: _topElement.city_label,
              value: _topElement.city_name,
              name: _topElement.city_name,
              code: _topElement.city_id
            });
            $(this).val(_topElement.city_label);
          }
        },
        open: function() {
          $(this)
            .removeClass("ui-corner-all")
            .addClass("ui-corner-top");
        },
        close: function() {
          $(this)
            .removeClass("ui-corner-top")
            .addClass("ui-corner-all");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const handleKeyUp = value => {
  //   if (value.trim() === "") {
  //     onSourceSelect("");
  //   }
  // };


  return (
    <div className="form-group">
      <label>{inputProps.label}</label>
      <input
        className="form-control"
        type="text"
        id={inputProps.id}
        value={inputProps.value}
        onChange={(e)=>onSourceSelect({label:e.target.value,code:'',name:e.target.value,value:e.target.value})}
       />
    </div>
  );
}
