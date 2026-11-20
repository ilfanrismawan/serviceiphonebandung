import bpy, math, random, os
from mathutils import Vector
OUT='D:/serviceiphonebandung/artifacts/iphone14-battery'
# Dedicated scene preserves any work in the original scene.
scene=bpy.data.scenes.new('iPhone 14 | Battery Studio')
bpy.context.window.scene=scene
scene.unit_settings.system='METRIC'
scene.unit_settings.scale_length=0.01
asset=bpy.data.collections.new('BATTERY | editable components'); scene.collection.children.link(asset)
studio=bpy.data.collections.new('STUDIO | camera and lights'); scene.collection.children.link(studio)
def move(obj,col):
    for c in list(obj.users_collection): c.objects.unlink(obj)
    col.objects.link(obj)
def mat(name,c,rough=.5,metal=0):
    m=bpy.data.materials.new(name); m.diffuse_color=(*c,1); m.use_nodes=True
    p=next(n for n in m.node_tree.nodes if n.type=='BSDF_PRINCIPLED')
    p.inputs['Base Color'].default_value=(*c,1); p.inputs['Roughness'].default_value=rough; p.inputs['Metallic'].default_value=metal
    return m
black=mat('Graphite | satin polymer pouch',(.022,.025,.031),.42)
edge=mat('Folded black sealing tape',(.012,.014,.018),.34)
flexmat=mat('Flex circuit | charcoal polyimide',(.027,.022,.018),.38)
gold=mat('Connector | gold contacts',(.68,.43,.12),.28,.82)
silver=mat('Connector | nickel frame',(.24,.26,.29),.27,.8)
ink=mat('Printed silver grey ink',(.33,.35,.38),.66)
ground=mat('Studio | cool porcelain',(.57,.62,.67),.8)
# Subtle microfinish rather than a perfectly plastic surface.
p=next(n for n in black.node_tree.nodes if n.type=='BSDF_PRINCIPLED')
noise=black.node_tree.nodes.new('ShaderNodeTexNoise'); noise.inputs['Scale'].default_value=210; noise.inputs['Detail'].default_value=2
bump=black.node_tree.nodes.new('ShaderNodeBump'); bump.inputs['Strength'].default_value=.12; bump.inputs['Distance'].default_value=.012
black.node_tree.links.new(noise.outputs['Fac'],bump.inputs['Height']); black.node_tree.links.new(bump.outputs['Normal'],p.inputs['Normal'])
def box(name,loc,dims,material,bevel=.03,col=asset):
    bpy.ops.mesh.primitive_cube_add(size=1,location=loc); o=bpy.context.object; o.name=name; o.dimensions=dims
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    o.data.materials.append(material); move(o,col)
    if bevel:
        mod=o.modifiers.new('Soft manufactured edges','BEVEL'); mod.width=bevel; mod.segments=4
        o.modifiers.new('Weighted corner normals','WEIGHTED_NORMAL')
    return o
body=box('01 | lithium-ion pouch', (0,0,.255),(4.95,9.75,.45),black,.115)
body['description']='Visual approximation from supplied photographs; not a manufacturing drawing.'
body['nominal_visual_dimensions_mm']='49.5 x 97.5 x 4.5 (approximate)'
box('02 | lower folded seal',(0,-4.65,.27),(4.97,.66,.47),edge,.045)
box('03 | top heat seal',(0,4.83,.24),(4.9,.12,.4),edge,.035)
for x in [-2.43,2.43]:
    box('04 | folded longitudinal seam',(x,0,.26),(.10,9.65,.38),edge,.035)
# A thin silver laminate edge is visible underneath the pouch.
box('05 | laminate underlayer',(0,0,.055),(4.82,9.58,.055),silver,.025)
# Fold wrinkles at the bottom, restrained and irregular.
random.seed(14)
for i in range(15):
    x=-2.25+i*.32
    o=box('Seal crease %02d'%i,(x,-4.49+random.uniform(-.035,.035),.503),(.018,random.uniform(.12,.25),.008),black,.004)
    o.rotation_euler[2]=random.uniform(-.3,.3)
# Flex ribbon: vertical run beside left edge, then bent outward to connector.
verts=[(-2.49,-4.0,.24),(-2.62,-4.0,.24),(-2.74,-.30,.32),(-2.55,-.30,.32),(-2.74,-.3,.32),(-2.55,-.3,.32),(-2.90,.10,.29),(-3.02,-.09,.29),(-3.02,-.09,.29),(-2.90,.10,.29),(-4.30,.01,.29),(-4.30,-.49,.29)]
mesh=bpy.data.meshes.new('Folded flexible circuit mesh'); mesh.from_pydata(verts,[],[(0,1,2,3),(4,5,6,7),(8,9,10,11)]); mesh.update()
o=bpy.data.objects.new('06 | bent flex ribbon',mesh); asset.objects.link(o); o.data.materials.append(flexmat)
s=o.modifiers.new('Ribbon thickness','SOLIDIFY'); s.thickness=.035
b=o.modifiers.new('Soft ribbon edges','BEVEL'); b.width=.018; b.segments=3
box('07 | connector reinforcement',(-4.23,-.24,.31),(.36,.55,.10),edge,.035)
box('08 | connector metal frame',(-4.26,-.24,.37),(.24,.43,.055),silver,.02)
for i in range(6):
    for x in [-4.33,-4.19]: box('Gold contact %02d'%i,(x,-.405+i*.065,.408),(.055,.043,.018),gold,.008)
# Printed labeling sits flush against the upper surface.
def label(name,text,x,y,size,align='CENTER'):
    cu=bpy.data.curves.new(name,'FONT'); cu.body=text; cu.size=size; cu.align_x=align; cu.space_line=1.22
    ob=bpy.data.objects.new(name,cu); asset.objects.link(ob); ob.location=(x,y,.483); ob.data.materials.append(ink); return ob
label('Chemistry symbol','Li-ion',0,3.65,.19)
label('Recycling mark','♻',0,3.94,.44)
label('Conformity marking','CE',0,2.72,.62)
label('Battery type','RECHARGEABLE Li-ion BATTERY',0,2.27,.115)
label('Product marking','iPhone 14',0,1.87,.20)
label('Multilingual caution','WARNING / AVERTISSEMENT\nDo not disassemble, puncture or crush.\nDo not heat or dispose of in fire.\nUse only with compatible equipment.\n\nLithium-ion polymer battery\nAssembled in China',0,1.43,.105)
label('Service label','BATTERY PACK\nLi-ion  •  Rechargeable',0,-.28,.12)
label('Lower serial','F5D23031\nDVG22XP6\nMFG',-.65,-3.58,.15,'LEFT')
# Matrix-like manufacturing codes: intentionally decorative, not encoded IDs.
def matrix(name,x,y,n=16,cell=.027):
    vs=[]; fs=[]; rng=random.Random(name)
    for j in range(n):
        for i in range(n):
            if rng.random()>.48 or i==0 or j==0:
                a=len(vs); xx=x+i*cell; yy=y+j*cell
                vs.extend([(xx,yy,.485),(xx+cell*.85,yy,.485),(xx+cell*.85,yy+cell*.85,.485),(xx,yy+cell*.85,.485)]); fs.append((a,a+1,a+2,a+3))
    me=bpy.data.meshes.new(name); me.from_pydata(vs,[],fs); ob=bpy.data.objects.new(name,me); asset.objects.link(ob); ob.data.materials.append(ink)
matrix('Upper manufacturing matrix',1.04,.95)
matrix('Lower manufacturing matrix',-1.17,-3.70,17,.028)
# Back label remains editable and visible when inspecting the other side.
back=label('Reverse caution','Rechargeable Li-ion Battery\nWARNING: Potential for fire or burning.\nDo not disassemble, crush or puncture.',0,-3.5,.13)
back.location.z=.023; back.rotation_euler[0]=math.pi
# Studio setup.
box('Studio surface',(0,0,-.12),(200,200,.20),ground,.03,studio)
world=bpy.data.worlds.new('Soft grey studio world'); world.use_nodes=True
next(n for n in world.node_tree.nodes if n.type=='BACKGROUND').inputs[0].default_value=(.35,.40,.48,1)
next(n for n in world.node_tree.nodes if n.type=='BACKGROUND').inputs[1].default_value=.35
scene.world=world
def aim(obj,target): obj.rotation_euler=(Vector(target)-obj.location).to_track_quat('-Z','Y').to_euler()
def area(name,loc,power,size,color):
    d=bpy.data.lights.new(name,'AREA'); d.energy=power; d.shape='DISK'; d.size=size; d.color=color
    o=bpy.data.objects.new(name,d); studio.objects.link(o); o.location=loc; aim(o,(0,0,0))
area('Key | large softbox',(-5,4,12),1500,8,(.88,.93,1))
area('Rim | long softbox',(7,3,7),1050,7,(1,.93,.82))
area('Fill | front',(-3,-8,6),600,8,(.85,.91,1))
camd=bpy.data.cameras.new('Product camera'); cam=bpy.data.objects.new('Product camera',camd); studio.objects.link(cam)
cam.location=(10,-14,27); aim(cam,(-.65,0,.15)); camd.type='ORTHO'; camd.ortho_scale=14.4; scene.camera=cam
scene.render.resolution_x=1200; scene.render.resolution_y=1400; scene.render.resolution_percentage=100
scene.render.image_settings.file_format='PNG'
scene.render.filepath=OUT+'/iphone14-battery-preview.png'
scene.view_settings.view_transform='AgX'
scene['Model notes']='Modeled from user photos. Approximate proportions; label is a visual reconstruction. Editable components, materials and text.'
# Product-only export excludes the studio.
bpy.ops.object.select_all(action='DESELECT')
for ob in asset.objects: ob.select_set(True)
bpy.context.view_layer.objects.active=body
bpy.ops.wm.save_as_mainfile(filepath=OUT+'/iphone14-battery.blend')
print('Saved editable Blender model:',OUT+'/iphone14-battery.blend')
print('Components:',len(asset.objects))
