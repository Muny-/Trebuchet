include('functions.js');
include('config.js');
include('models.js');

function main() {
    
    var truss_and_base = union(
        base(),
        fulcrum_truss(),
        fulcrum_truss_beam_plates()
        
    ).subtract(union(
        fulcrum_base_holes(),
        fulcrum_truss_beam_plate_holes()
    ));
    
    var trebuchet = [
        arm(),
        truss_and_base,
        wheels_and_axles()
    ];
    
    echo("total length of 2x4's: " + (__total_2x4_length/12) + " ft");
    echo("total weight of 2x4's: " + (__total_2x4_length/12)*2.125 + " lbs");
    
    return trebuchet;
}

function fulcrum_base_holes() {
    var vertical_beam = union(
        bolthole(FIVE_SIXTEENTHS, (1.5*2)).rotateX(90).translate([12+(1.5/2),-(_inside_base_width/2)-1.5,-(1.5/2)]),
        bolthole(FIVE_SIXTEENTHS, (1.5*2)).rotateX(90).translate([12-(1.5/2),-(_inside_base_width/2)-1.5,-(1.5/2)]),
        bolthole(FIVE_SIXTEENTHS, (1.5*2)).rotateX(90).translate([12+(1.5/2),-(_inside_base_width/2)-1.5,(1.5/2)]),
        bolthole(FIVE_SIXTEENTHS, (1.5*2)).rotateX(90).translate([12-(1.5/2),-(_inside_base_width/2)-1.5,(1.5/2)])
    );
    
    var short_beam = union(
        bolthole(FIVE_SIXTEENTHS, 1.5).rotateX(90).translate([47.5,-(_inside_base_width/2)-(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 1.5).rotateX(90).translate([47.5-3,-(_inside_base_width/2)-(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 1.5).rotateX(90).translate([47.5-6,-(_inside_base_width/2)-(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 1.5).rotateX(90).translate([47.5-3,-(_inside_base_width/2)-(1.5/2),7]),
        bolthole(FIVE_SIXTEENTHS, 1.5).rotateX(90).translate([47.5-1.5,-(_inside_base_width/2)-(1.5/2),4])
    );
    
    var long_beam = union(
        bolthole(FIVE_SIXTEENTHS, (1.5*2)).rotateX(90).translate([-41.4+(1.5/2),-(_inside_base_width/2),-(1.5/2)]),
        bolthole(FIVE_SIXTEENTHS, (1.5*2)).rotateX(90).translate([-41.6-(1.5/2),-(_inside_base_width/2),-(1.5/2)]),
        bolthole(FIVE_SIXTEENTHS, (1.5*2)).rotateX(90).translate([-40.4+(1.5/2),-(_inside_base_width/2),(1.5/2)]),
        bolthole(FIVE_SIXTEENTHS, (1.5*2)).rotateX(90).translate([-40.6-(1.5/2),-(_inside_base_width/2),(1.5/2)])
    );
    
    var vertical_beam_back = vertical_beam.translate([0,_inside_base_width+(3),0]);
    
    var short_beam_back = short_beam.translate([0,_inside_base_width+1.5,0]);
    
    var long_beam_back = long_beam.translate([0,_inside_base_width,0]);
    
    return union(vertical_beam, vertical_beam_back, short_beam, short_beam_back, long_beam, long_beam_back);
}

function arm() {
    return twoby4(_length_arm).center('x', 'z').rotateY(-45).translate([-10,0,50]);
}

function fulcrum_truss() {
    return union(
        twoby4(_pivot_beam_length).rotateY(-90).center('x', 'y').translate([12,(_inside_base_width/2)+1.5+(1.5/2),-(3.5/2)]).setColor(rgb(26,152,89)),
        twoby4(_pivot_beam_length).rotateY(-90).center('x', 'y').translate([12,-(_inside_base_width/2)-1.5-(1.5/2),-(3.5/2)]).setColor(rgb(26,152,89)),
        
        twoby4(86).center('x', 'y').rotateY(65).translate([37.18803574-9,-(_inside_base_width/2)-(1.5/2),(_pivot_beam_length/2)-(3.5/2)]).setColor(rgb(216,109,46)),
        twoby4(86).center('x', 'y').rotateY(65).translate([37.18803574-9,(_inside_base_width/2)+(1.5/2),(_pivot_beam_length/2)-(3.5/2)]).setColor(rgb(216,109,46)),
        
        twoby4(99).center('x', 'y').rotateY(-55).translate([-12.75,-(_inside_base_width/2)+(1.5/2),(_pivot_beam_length/2)-(3.5/2)-1]).setColor(rgb(163,37,100)),
        twoby4(99).center('x', 'y').rotateY(-55).translate([-12.75,(_inside_base_width/2)-(1.5/2),(_pivot_beam_length/2)-(3.5/2)-1]).setColor(rgb(163,37,100))
    );
}

function fulcrum_truss_beam_plates() {
    var long_beam = union(
        cube({size: [1.5,11+(3.5*2),(1/8)]}).center('x', 'z').rotateX(90).translate([-32.5,-(_inside_base_width/2),-(3.5/2)]).setColor(rgb(145, 82, 216))
    );
    
    var long_beam_back = long_beam.translate([0,_inside_base_width,0]);
    
    return union(long_beam, long_beam_back);
}

function fulcrum_truss_beam_plate_holes() {
    var long_beam = union(
        bolthole(FIVE_SIXTEENTHS, (1.5)+(1/8)).rotateX(90).translate([-32.5,-(_inside_base_width/2)-(1.5/2),-(1.5/2)]),
        bolthole(FIVE_SIXTEENTHS, (1.5)+(1/8)).rotateX(90).translate([-32.5,-(_inside_base_width/2)-(1.5/2),(1.5/2)]),
        
        bolthole(FIVE_SIXTEENTHS, (1.5)+(1/8)).rotateX(90).translate([-32.5,-(_inside_base_width/2)+(1.5/2),12-(1.5/1.5)]),
        bolthole(FIVE_SIXTEENTHS, (1.5)+(1/8)).rotateX(90).translate([-32.5,-(_inside_base_width/2)+(1.5/2),12+(1.5/1.5)])
    );
    
    return union(long_beam);
}

function wheels_and_axles() {
    return union(
        cylinder({r: (3/4)/2, h: outside_base_width+8}).center().rotateX(90).translate([(inside_base_length/2)-2.6,0,-(3.5/2)-(0.585/2)-(.0598)-1]),
        cylinder({r: (3/4)/2, h: outside_base_width+8}).center().rotateX(90).translate([-(inside_base_length/2)+2.6,0,-(3.5/2)-(0.585/2)-(.0598)-1])
    );
}

function base() {
    return union(
        twoby4(inside_base_length).center().translate([0,(_inside_base_width/2)+(1.5/2),0]),
        twoby4(inside_base_length).center().translate([0,-(_inside_base_width/2)-(1.5/2),0]),
        twoby4(outside_base_width).center().rotateZ(90).translate([(inside_base_length/2)+(1.5/2),0,0]).setColor([0,0,1]),
        twoby4(outside_base_width).center().rotateZ(90).translate([-(inside_base_length/2)-(1.5/2),0,0]).setColor([0,0,1]),
        
        twoby4(Math.sqrt(Math.pow(inside_base_length/2,2) + Math.pow(_inside_base_width,2))).center().rotateZ(Math.atan(_inside_base_width/(inside_base_length/2))/(Math.PI/180)).translate([-(inside_base_length/4),0,0]).subtract(twoby4(5, true).center().rotateZ(90).translate([1.5/2,(_inside_base_width/2)+(1.5/2),1])).setColor([1,1,0]),
        twoby4(Math.sqrt(Math.pow(inside_base_length/2,2) + Math.pow(_inside_base_width,2))).center().rotateZ(-Math.atan(_inside_base_width/(inside_base_length/2))/(Math.PI/180)).translate([(inside_base_length/4),0,0]).setColor([0,1,1]),
        
        twoby4(_inside_base_width).center().rotateZ(90).setColor(0,1,0),
        
        tetravertex_truss_plate(),
        tetravertex_truss_plate().rotateY(180),
        
        t_vertex_truss_plate(),
        t_vertex_truss_plate().rotateY(180),
        
        trivertex_truss_plate(),
        trivertex_truss_plate().translate([0,0,-3.5-.0598]),
        trivertex_truss_plate().rotateY(180),
        trivertex_truss_plate().rotateY(180).translate([0,0,3.5+.0598]),
        
        bivertex_truss_plate(),
        bivertex_truss_plate().translate([0,0,-3.5-.0598]),
        bivertex_truss_plate().rotateY(180),
        bivertex_truss_plate().rotateY(180).translate([0,0,3.5+.0598]),
        
        
        pillow_block_bearing().rotateX(180).translate([(inside_base_length/2)-2.6,-(_inside_base_width/2)-(1.5/2),-(3.5/2)-(0.585/2)-(.0598)]),
        pillow_block_bearing().rotateX(180).translate([(inside_base_length/2)-2.6,-(_inside_base_width/2)-(1.5/2),-(3.5/2)-(0.585/2)-(.0598)]).rotateZ(180),
        pillow_block_bearing().rotateX(180).translate([-(inside_base_length/2)+2.6,-(_inside_base_width/2)-(1.5/2),-(3.5/2)-(0.585/2)-(.0598)]),
        pillow_block_bearing().rotateX(180).translate([-(inside_base_length/2)+2.6,-(_inside_base_width/2)-(1.5/2),-(3.5/2)-(0.585/2)-(.0598)]).rotateZ(180)

    ).subtract(
        union(
            trivertex_corner_hole_pattern(),
            trivertex_corner_hole_pattern().rotateY(180),
            
            bivertex_corner_hole_pattern(),
            bivertex_corner_hole_pattern().rotateY(180),
            
            t_corner_hole_pattern(),
            
            tetravertex_hole_pattern()
        )
    );
}

function bivertex_truss_plate() {
    return union(
        cube({size: [5,3.5,.0598]}).center().translate([-(inside_base_length/2)+1,(_inside_base_width/2)-.25,(3.5/2)+(.0598/2)]).setColor(0.5,0.5,0.5),
        cube({size: [1.5,1.5,.0598]}).center().translate([-(inside_base_length/2)+1+3.5,(_inside_base_width/2)+(1.5/2),(3.5/2)+(.0598/2)]).setColor(0.5,0.5,0.5)
    ).subtract(
        cube({size: [4.031128,4.031128,.0598]}).center().rotateZ(29.7448813).translate([-(inside_base_length/2)+2.75,(_inside_base_width/2)-2.75,(3.5/2)+(.0598/2)])
    );
}

function trivertex_truss_plate() {
    return union(
        cube({size: [5,3.5,.0598]}).center().translate([-(inside_base_length/2)+1,-(_inside_base_width/2)+.25,(3.5/2)+(.0598/2)]).setColor(0.5,0.5,0.5),
        cube({size: [1.5,1.5,.0598]}).center().translate([-(inside_base_length/2)+1+3.5,-(_inside_base_width/2)-(1.5/2),(3.5/2)+(.0598/2)]).setColor(0.5,0.5,0.5)
    );
}

function t_vertex_truss_plate() {
    return cube({size: [8, 5, .0598]}).center().translate([0,-(_inside_base_width/2)+(1),(3.5/2)+(.0598/2)]).setColor(0.5,0.5,0.5).subtract(
        union(
            cube({size: [4.7762,4.7762,0.0598]}).center().rotateZ(47.121).translate([-4.125,-(_inside_base_width/2)+3.4,(3.5/2)+(.0598/2)]),
            cube({size: [4.7762,4.7762,0.0598]}).center().rotateZ(47.121).translate([-4.125,-(_inside_base_width/2)+3.4,-(3.5/2)-(.0598/2)]).rotateY(180)
        )
    );
}

function tetravertex_truss_plate() {
    return cube({size: [8,6,0.0598]}).center().translate([0,(_inside_base_width/2)-1.5,(3.5/2)+(.0598/2)]).setColor(0.5,0.5,0.5).subtract(
        union(
            cube({size: [6, 6, 0.0598]}).rotateZ(60).center().translate([-4,(_inside_base_width/2)-6.1,(3.5/2)+(.0598/2)]),
            cube({size: [6, 6, 0.0598]}).rotateZ(60).center().translate([-4,(_inside_base_width/2)-6.1,-(3.5/2)-(.0598/2)]).rotateY(180)
        )
    );
}

function tetravertex_hole_pattern() {
    return union(
        bolthole(FIVE_SIXTEENTHS, 4).translate([0,(_inside_base_width/2)+(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([3,(_inside_base_width/2)+(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([-3,(_inside_base_width/2)+(1.5/2),0]),
        
        bolthole(FIVE_SIXTEENTHS, 4).translate([-3,(_inside_base_width/2)+(1.5/2)-2.1,0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([3,(_inside_base_width/2)+(1.5/2)-2.1,0]),
        
        bolthole(FIVE_SIXTEENTHS, 4).translate([-1,(_inside_base_width/2)+(1.5/2)-1.3,0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([1,(_inside_base_width/2)+(1.5/2)-1.3,0]),
        
        bolthole(FIVE_SIXTEENTHS, 4).translate([0,(_inside_base_width/2)+(1.5/2)-2.5,0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([0,(_inside_base_width/2)+(1.5/2)-4.5,0])
    );
}

function t_corner_hole_pattern() {
    return union(
        bolthole(FIVE_SIXTEENTHS, 4).translate([0,-(_inside_base_width/2)-(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([-3,-(_inside_base_width/2)-(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([+3,-(_inside_base_width/2)-(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([0,-(_inside_base_width/2)-(1.5/2)+1.5,0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([0,-(_inside_base_width/2)-(1.5/2)+3,0])
    );
}

function trivertex_corner_hole_pattern() {
    return union(
        bolthole(FIVE_SIXTEENTHS, 4).translate([-(inside_base_length/2)-(1.5/2),-(_inside_base_width/2)-(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([-(inside_base_length/2)-(1.5/2),-(_inside_base_width/2)-(1.5/2)+2,0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([-(inside_base_length/2)-(1.5/2)+3.5,-(_inside_base_width/2)-(1.5/2)+2,0]),
        bolthole(THREE_EIGHTHS, 4).translate([-(inside_base_length/2)-(1.5/2)+(1.5+3.74016),-(_inside_base_width/2)-(1.5/2),0]),
        bolthole(THREE_EIGHTHS, 4).translate([-(inside_base_length/2)-(1.5/2)+1.5,-(_inside_base_width/2)-(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([-(inside_base_length/2)-(1.5/2)+1.5,-(_inside_base_width/2)-(1.5/2)+1.25,0])
    );
}

function bivertex_corner_hole_pattern() {
    return union(
        bolthole(FIVE_SIXTEENTHS, 4).translate([-(inside_base_length/2)-(1.5/2),(_inside_base_width/2)+(1.5/2),0]),
        bolthole(FIVE_SIXTEENTHS, 4).translate([-(inside_base_length/2)-(1.5/2),(_inside_base_width/2)+(1.5/2)-2,0]),
        bolthole(THREE_EIGHTHS, 4).translate([-(inside_base_length/2)-(1.5/2)+1.5,(_inside_base_width/2)+(1.5/2),0]),
        bolthole(THREE_EIGHTHS, 4).translate([-(inside_base_length/2)-(1.5/2)+(1.5+3.74016),(_inside_base_width/2)+(1.5/2),0])
        
    );
}