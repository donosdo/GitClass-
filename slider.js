        // #region Jssor Slider Begin 
        // Generator: Jssor Slider Maker 
        // Source: http://www.jssor.com 
        // This code works without jquery library.
   
    
        jssor_1_slider_init = function() {

            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,$Opacity:2}
            ];

            var jssor_1_SlideoTransitions = [
              [{b:0,d:1160,x:783,y:3}],       //data-t="0"
              [{b:260,d:780,x:-750,y:18}],    //data-t="1"
              [{b:1160,d:840,x:667,y:2}],     //data-t="2"
              [{b:2020,d:400,x:35,y:-400}],   //data-t="3"
              [{b:2780,d:520,x:-372,y:-6}],   //data-t="4"
              [{b:3300,d:640,x:-3,y:-145}],   //data-t="5"
              [{b:0,d:700,x:380,y:-1,i:2}],   //data-t="6"
              [{b:0,d:700,x:-751,y:-5,i:1}],  //data-t="7"
              [{b:700,d:800,x:-827,y:-11}],   //data-t="8"
              [{b:1500,d:500,x:-10,y:-114}],  //data-t="9"
              [{b:2000,d:500,x:-9,y:230}],    //data-t="10"
              [{b:2000,d:420,x:14,y:-158}],   //data-t="11"
              [{b:2500,d:1100,x:-340}],       //data-t="12"
              [{b:0,d:800,x:-1030,y:3}],      //data-t="13"
              [{b:800,d:500,x:30,y:200}],     //data-t="14"
              [{b:800,d:500,x:103,y:-202}],   //data-t="15"
              [{b:1300,d:900,x:12,y:-355}],   //data-t="16"
              [{b:2200,d:1000,x:-650,y:5}]    //data-t="17"
            ];

            var jssor_1_options = {
              $AutoPlay: true,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize,1500 );
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orient2000nchange", ScaleSlider);
            /*responsive code end*/
        };
    