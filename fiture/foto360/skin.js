// Garden Gnome Software - Skin
// Pano2VR 6.0.3/17298
// Filename: angger3.ggsk
// Generated 2022-07-17T08:33:04

function pano2vrSkin(player,base) {
	player.addVariable('opt_3d_preview', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggId="Map 1";
		el.ggDx=-36.27;
		el.ggDy=31.34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='z-index: 0;';
		hs+=cssPrefix + 'border-radius : 54px;';
		hs+='border-radius : 54px;';
		hs+='background : #ffffff;';
		hs+='border : 5px solid #ffd600;';
		hs+='cursor : pointer;';
		hs+='height : 32.6852%;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24.8438%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getViewerSize().width == 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1.style[domTransition]='';
				if (me._map_1.ggCurrentLogicStateVisible == 0) {
					me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.ggVisible=true;
				}
				else {
					me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.ggVisible=true;
				}
			}
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._map_1.ggNodeChange=function () {
			if (me._map_1.ggLastActivMarker) {
				if (me._map_1.ggLastActivMarker._div.ggDeactivate) me._map_1.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			var marker=me._map_1.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_1.ggLastActivMarker=marker;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggCenterNode();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me.divSkin.appendChild(me._map_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAfCAYAAADqUJ2JAAADJ0lEQVRIiZWWT2gTWRjAfy9qm5S6TaiiTXdprNS09lC1VMUFm8seFlbWQ+L/qAsuKoIGBQ96ML3oRTQeVHBBssxhF5PFFfG2sAl4sIe0KfhfbNODdtf9k4lWmdrW5yEzcTLJ2PSDOcw37/3ml/m+916ElJJqIcIJH7BGvwByQFYqoWzV8VaQCCcCQBTor/oGGAeiUgnFbUEinIgBx2wA1rgF7JdKSAVYaILEgX3mkV6PkxaPE4CJvMbLvGZ+/D2QQv/pQkqJCCciwEVjxKqWRn7b8SszS04zK5pKMydUjWjyKZlR1Qy8JJVQRLDnhpvih2wCCKxu5vyebnonlzMt69+/nf7iyumRO7GmhkWHur9afKjT2+geSD7h9tDfZtgKB7DVgHg9TqJBP8O5wl'+
			'8Ai8RUnbvun8jlvvXps91rB3dvWOm59yz//EzQT2+72wyKGCAAdn7dihBCDo8VNlo+bBtwk0cidaSl68Cr11Mzuza1mp8HHEAJHVjdTGZUHbm8t2+c6tEP/OnXto190/nOnO9xmO9a3E4mp2ZzNpBStDcMdvimjpblHNZBdQuEZw7O+B+vDlx/6rppzhUcQKnl0w//48tmV48NoAAM0CV9T2ZP9E+oZT2VdVBsKgBSD/+l09voPpXMnrNALgE+umT0+C+Z7Rs7PCtvZ8rK/7vRkCp6C1z7sQe/t1Funm4VQBrYT5fMAZy8MRT5bt3yCy/+18TBn0Z4o80YoBUGKI6+PBY7FxIN+vm2c4LcZMfM4xeT9wHaljb425a4XENjBU4oD8yQtFRCAQO0Bhg2u/a2u9mybhlefa29zGtkRlVrRwP8IJVQvLT6RTiRwn7rsItx'+
			'qYR8UF7++DwhZXNKIH2jsuvoalEAYhUgPaLzsTE2tQrQPK1i5puKJVKj1c9SCeU+C6rRquJl1Yzmshqw2tiCPmNVVqlajOysYuZK1QTSrdK12MxlZLWK2NmA9aQNHvYBAcCnpwLU9/Ug6p1odwcpboKqfqVk8mq2AiSCh8sOyU90JwgXfMhXE7klk1e3gunIprgAVcr/gfiQWhtSg2IVc3o+p9vFjckfAcTGM0nZ0nApAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -110px;';
		hs+='position : absolute;';
		hs+='top : 771px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggDx=-760;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 419px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 342px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_mute);
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6.94444%;';
		hs+='left : 76.46%;';
		hs+='position : absolute;';
		hs+='top : 82.78%;';
		hs+='visibility : inherit;';
		hs+='width : 3.90625%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_1.onclick=function (e) {
			player.setVolume("_main",0.6);
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_1);
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6.94444%;';
		hs+='left : 81.62%;';
		hs+='position : absolute;';
		hs+='top : 82.42%;';
		hs+='visibility : inherit;';
		hs+='width : 3.90625%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_2.onclick=function (e) {
			player.setVolume("_main",0);
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10%;';
		hs+='left : 87.71%;';
		hs+='position : absolute;';
		hs+='top : 82.05%;';
		hs+='visibility : inherit;';
		hs+='width : 10%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
		el=me._button_3=document.createElement('div');
		els=me._button_3__img=document.createElement('img');
		els.className='ggskin ggskin_button_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4.62963%;';
		hs+='left : 75.8333%;';
		hs+='position : absolute;';
		hs+='top : 91.8519%;';
		hs+='visibility : inherit;';
		hs+='width : 9.79167%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_3.onclick=function (e) {
			player.openUrl("https:\/\/anggerdewi03.github.io\/CandiKedulan\/indeks.html#section-two","");
			player.setVolume("_main",0);
		}
		me._button_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_3);
		el=me._button_4=document.createElement('div');
		els=me._button_4__img=document.createElement('img');
		els.className='ggskin ggskin_button_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4.62963%;';
		hs+='left : 87.2917%;';
		hs+='position : absolute;';
		hs+='top : 91.9444%;';
		hs+='visibility : inherit;';
		hs+='width : 9.79167%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_4.onclick=function (e) {
			player.openUrl("https:\/\/experience.arcgis.com\/experience\/78699a7f2b304c3faa6c8fe48b55bdeb","");
			player.setVolume("_main",0);
		}
		me._button_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_4);
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'FloorPlan01';
		me._map_1.ggLastNodeId=null;
		me._map_1.ggMarkerArray=[];
		me._map_1.ggGoogleMarkerArray=[];
		me._map_1.ggLastZoom = -1;
		me._map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_1.ggInitMap=function(keepZoom) {
			me._map_1.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map_1.ggMapId);
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapType == 'file') {
				me._map_1.style.backgroundColor = mapDetails['bgcolor'];
				me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(0,0);
			}
			if (mapType == 'web') {
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 1;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 1;
				var mapOptions = {
					zoom: initZoom,
					zoomControl: false,
					attributionControl: false,
					maxZoom: ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18
				};
				me._map_1.ggMap = L.map(me._map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._map_1.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails['styleurl'] == '') {
						L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{}).addTo(me._map_1.ggMap);
					} else {
						var styleurlstring = mapDetails['styleurl'];
						styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
						L.tileLayer('https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails['mapkey'],{}).addTo(me._map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._map_1.ggMap);
				}
			} else if (mapType == 'file') {
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 8;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					zoomControl: false,
					attributionControl: false
				};
				me._map_1.ggMap = L.map(me._map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._map_1.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._map_1.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._map_1.ggMap);
				me._map_1.ggMap.on('move zoom', function() {
					me._map_1.ggCheckBounds(mapDetails);
				});
				me._map_1.ggCheckBounds(mapDetails);
			}
		}
		me._map_1.ggClearMap=function() {
		me._map_1.ggMap.remove();
		me._map_1.ggMap = null;
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggClearMapMarkers=function() {
			me._map_1.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_1.ggGoogleMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._map_1.ggMap);
				}
			}
			me._map_1.ggGoogleMarkerArray=[];
		}
		me._map_1.ggCenterNode=function() {
			if (!me._map_1.ggMap) return;
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._map_1.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._map_1.ggFitBounds=function(force) {
			if (me._map_1.ggMarkerBounds.isValid()) {
				if (me._map_1.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_1.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._map_1.ggMap.zoomOut(1, {animate: false});
					me._map_1.ggMap.fitBounds(me._map_1.ggMarkerBounds, {padding: [30, 30], animate: false});
					} else {
						if (player.getMapType(me._map_1.ggMapId) == 'web') {
							me._map_1.ggMap.setZoom(1);
						} else {
							me._map_1.ggMap.setZoom(7 + 1);
						}
					}
				} else {
					me._map_1.ggMap.setView(me._map_1.ggMarkerBounds.getCenter(), me._map_1.ggMap.getZoom());
					if (player.getMapType(me._map_1.ggMapId) == 'web') {
						if (force) {
						me._map_1.ggMap.setZoom(18);
						} else {
							me._map_1.ggMap.setZoom(1);
						}
					} else {
						if (force) {
						me._map_1.ggMap.setZoom(7);
						} else {
							me._map_1.ggMap.setZoom(7 + 1);
						}
					}
				}
			}
		}
		me._map_1.ggInitMapMarkers=function(updateMapBounds) {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_1.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_1.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var mapIcon = L.icon({iconUrl: basePath + 'images/icon.png', iconRetinaUrl: basePath + 'images/icon.png', iconSize : [40, 40], iconAnchor: [20, 40]});
					marker = L.marker(markerLocation, {title: player.getNodeTitle(id), icon: mapIcon});
					marker.ggId=id;
					marker.on('click', function() {
						player.openNext('{' + this.ggId + '}');
						activeNodeLatLng=me.position;
						lastFov=-1; // force radar update
					});
					marker.addTo(me._map_1.ggMap);
					me._map_1.ggGoogleMarkerArray[id] = marker;
					me._map_1.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._map_1.ggMarkerBounds.isValid() && updateMapBounds) {
				me._map_1.ggFitBounds(false);
			}
			skin.updateSize(me._map_1);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			if (me._map_1.ggMap) {
				me._map_1.ggLastZoom = me._map_1.ggMap.getZoom();
			}
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(true);
			me._map_1.ggInitMapMarkers(false);
		var mapDetails = player.getMapDetails(me._map_1.ggMapId);
		me._map_1.ggCheckBounds(mapDetails);
		}
		me._map_1.ggInCheckBounds=false;
		me._map_1.ggCheckBounds=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var mapWidthInDeg = 360.0 / Math.pow(2, 7);
			var mapHeightInDeg = mapWidthInDeg / mapAR;
			if (me._map_1.ggInCheckBounds) return;
			me._map_1.ggInCheckBounds = true;
			var mapCenter = me._map_1.ggMap.getCenter();
			var currentZoom = me._map_1.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_1.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_1.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			if (x > mapWidthInDeg - xOffset) x = mapWidthInDeg - xOffset;
			if (x < xOffset) x = xOffset;
			if (y < -mapHeightInDeg + yOffset) y = -mapHeightInDeg + yOffset;
			if (y > -yOffset) y = -yOffset;
			var newCenter = L.latLng(y, x);
			me._map_1.ggMap.setView(newCenter, me._map_1.ggMap.getZoom(), {animate: false});
			me._map_1.ggInCheckBounds = false;
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	me._map_1.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._map_1.logicBlock_visible(); });
	me.skinTimerEvent();
};