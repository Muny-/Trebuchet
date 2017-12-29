var ___pbng = 0;

pillow_block_bearing = function() {

    if (___pbng == 0)
    {    
        var res = 10;
        
        ___pbng = union(
            cube({size: [5.116,1.2905,0.7], round: true, radius: [.1,.1,.1], fn: res}).subtract(
                cube({size: [5.116,1.2905,0.5835]}).translate([0,0,-.47])
            ).center().setColor(rgb(26,152,89)).subtract(
                union(
                    cube({size: [.785,0.424,.7], round:true,radius: [.2,.2,0], fn: res}).center().translate([1.87008,0,0]).setColor(rgb(26,152,89)),
                    cube({size: [.785,0.424,.7], round:true,radius: [.2,.2,0], fn: res}).center().translate([-1.87008,0,0]).setColor(rgb(26,152,89))
                )
            ),
            
            cylinder({r: 0.54025, h: 1.2155, fn: res}).center().rotateX(90).translate([0,-.07,1]).subtract(
                cylinder({r: 0.375, h: 1.2905, fn: res}).center().rotateX(90).translate([0,-.07,1])
            ).setColor(rgb(70,70,81)),
            
            union(
                cylinder({r: 1.25, h: 1.2905, fn: res}).center().rotateX(90).translate([0,0,1]),
            
                cube({size: [2.2, 1.2905, 1.1]}).center().translate([1.25,0,.7]).subtract(
                    cylinder({r: 1.09, h: 1.2905, fn: res}).center().rotateX(90).translate([2.3,0,1.28])
                ),
                
                cube({size: [2.2, 1.2905, 1.1]}).center().translate([-1.25,0,.7]).subtract(
                    cylinder({r: 1.09, h: 1.2905, fn: res}).center().rotateX(90).translate([-2.3,0,1.28])
                )
                
                
            ).setColor(rgb(26,152,89)).subtract(
                union(
                    
                    cube({size: [2,1.05,2], round: true, radius: [.5,.5,.3], fn: res}).center().translate([2.15,0,1]).setColor(rgb(26,152,89)),
                    
                    cube({size: [2,1.05,2], round: true, radius: [.5,.5,.3], fn: res}).center().translate([-2.15,0,1]).setColor(rgb(26,152,89)),
                    
                    cube({size: [1,.2,1.1], round:true, fn: res}).rotateY(-6).center().translate([.485,-(1.2905)/2,.7]).setColor(rgb(26,152,89)),
                    
                    cube({size: [1,.2,1.1], round:true, fn: res}).rotateY(6).center().translate([-.485,-(1.2905)/2,.7]).setColor(rgb(26,152,89)),
                    
                    cube({size: [1,.2,1.1], round:true, fn: res}).rotateY(-6).center().translate([.485,(1.2905)/2,.7]).setColor(rgb(26,152,89)),
                    
                    cube({size: [1,.2,1.1], round:true, fn: res}).rotateY(6).center().translate([-.485,(1.2905)/2,.7]).setColor(rgb(26,152,89)),
                    
                    cube({size: [4,1,5]}).center().rotateX(-6).translate([0,-1.18,0]).setColor(rgb(26,152,89)),
                    
                    cube({size: [4,1,5]}).center().rotateX(6).translate([0,1.18,0]).setColor(rgb(26,152,89)),
                    
                    cylinder({r: 0.942, h: 0.4, fn: res}).center().rotateX(90).translate([0,-(1.2905/2),1]).setColor(rgb(250,250,250)),
                    cylinder({r: 0.942, h: 0.4, fn: res}).center().rotateX(90).translate([0,(1.2905/2),1]).setColor(rgb(250,250,250)),
                    
                    cylinder({r: 0.375, h: 1.2905, fn: res}).center().rotateX(90).translate([0,0,1]).setColor(rgb(26,152,89))
                )
            )
        );
    }

    return ___pbng;
}