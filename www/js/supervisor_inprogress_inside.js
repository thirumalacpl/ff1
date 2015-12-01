$(document).on('pageshow', '#pagedesign', function(){  
//alert('supervisor_inprogress_inside');
$('.iGallery').imageflip()

$('.sddq').empty();
$('#sda_newin').empty();
$('#lii_newin').empty();
$('.proof').show();

$('#logapp').empty();
$('.document_imag_inprooneqa').empty();
$('.document_imag_inprooneqb').empty();
$('.document_imag_inprooneqc').empty();
$('.document_imag_inprooneqd').empty();
$('.document_imag_inprooneqe').empty();
$('.document_imag_inprooneqf').empty();


$(document).off('click', '#dashins').on('click', '#dashins', function() {

$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inprogressins').on('click', '#inprogressins', function() {

$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verifiedins').on('click', '#verifiedins', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#not_verifiedins').on('click', '#not_verifiedins', function() {

$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#completedins').on('click', '#completedins', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutins').on('click', '#signoutins', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#inprogressnextbj').on('click', '#inprogressnextbj', function() {

//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#primarymessage'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#before_inprouiou').on('click', '#before_inprouiou', function() {

  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});
/*end*/


//alert("success");
$('.document_imag_inpro').empty();
$('#select_inpro').empty();

assignValues();




function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_inpro"));
  activity_log_details_array = JSON.parse(sessionStorage.getItem("activity_log_supervisor_details_array"));

  currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid_inpro"));



currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_inpro"));

education_array = JSON.parse(sessionStorage.getItem("education_array"));
employment_array = JSON.parse(sessionStorage.getItem("employment_array"));
address_array = JSON.parse(sessionStorage.getItem("address_array"));


//alert("inside inprogress educat" +currentobj_educational_records.user_id+currentobj_educational_records.education_type );

currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobj_employment_records_inpo"));

//alert("inside inprogress employ" +currentobj_employment_records.user_id+currentobj_employment_records.employment_type );

addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

bank_inpro =  JSON.parse(sessionStorage.getItem("bank_inpro"));
assest_inpro =  JSON.parse(sessionStorage.getItem("assest_inpro"));
address_veriia =  JSON.parse(sessionStorage.getItem("address_veriia"));
referencea =  JSON.parse(sessionStorage.getItem("referencea"));
distr_residentiala =  JSON.parse(sessionStorage.getItem("distr_residentiala"));
dist_detailsa =  JSON.parse(sessionStorage.getItem("dist_detailsa"));


web_veria =  JSON.parse(sessionStorage.getItem("web_veria"));
supplier_venda =  JSON.parse(sessionStorage.getItem("supplier_venda"));
ware_housa =  JSON.parse(sessionStorage.getItem("ware_housa"));
common_addressa =  JSON.parse(sessionStorage.getItem("common_addressa"));

employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

driving_lica = JSON.parse(sessionStorage.getItem("driving_lica"));
credential_deta = JSON.parse(sessionStorage.getItem("credential_deta"));
identity_deta = JSON.parse(sessionStorage.getItem("identity_deta"));
professional_deta = JSON.parse(sessionStorage.getItem("professional_deta"));

bankruptcy_deta = JSON.parse(sessionStorage.getItem("bankruptcy_deta"));

if(region_array == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}

var coordinator_id = user_obja.qualification_id;
 //alert(coordinator_id+'qualification_idcoordinator_id');
// var proof_type_id =currentobja_addressid.proof_type_id;
// alert(proof_type_id+'proof_type_id');
var verification_user_id = user_obja.verification_user_id;

var qualification_id=user_obja.qualification_id;
 //alert(qualification_id+'qualification_id');
var city=user_obja.city_name;
var state=user_obja.state;


var region_num=region_array.region;

//alert(currentobj_log_inpro);
//var current_log=currentobj_log_inpro;

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
username=regionArray_array.username;
//alert(username);
$("#userlistinso").text(username);

if(qualification_id == '43' ){
 // alert('web verifi details 43');


var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.designation+'</p><span class="pri_span">Designation</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.company+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.designation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.country+'</p></li>'

liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+web_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+web_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+web_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+web_veria.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '47' ){
  //alert('supplier details 47');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.supplier_name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_date+'</p><span class="pri_span">Date of Registration</span></div>'
$('#sda_newin').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Commercial Reg Number:' +supplier_venda.registration_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence: '+supplier_venda.license_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">TIN:'+supplier_venda.tin_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street: '+supplier_venda.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark: '+supplier_venda.landmark+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District: '+supplier_venda.district+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+supplier_venda.street+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+supplier_venda.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+supplier_venda.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City: '+supplier_venda.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State: '+supplier_venda.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '45' ){
  //alert('ware house details 45');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/warehousename-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.warehouse_name+'</p><span class="pri_span">Ware House Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Permiter-use.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.permit+'</p><span class="pri_span">Permitted Use</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/suit-unit-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.sunit+'</p><span class="pri_span">Suit/Unit</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.warehouse_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.country+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Warehouse.png" alt="" class="li_img_pri"><p class="li_p_pri">WareHouse: '+ware_housa.warehouse_name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Suit-unit.png" alt="" class="li_img_pri"><p class="li_p_pri">Suit/unit: '+ware_housa.sunit+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Permit-use.png" alt="" class="li_img_pri"><p class="li_p_pri">Lease Start: '+ware_housa.lease_start+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Permit-use.png" alt="" class="li_img_pri"><p class="li_p_pri">Lease End: '+ware_housa.lease_end+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Land-lord-type.png" alt="" class="li_img_pri"><p class="li_p_pri">Land loard type: '+ware_housa.landlord_type+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Lease-type-icon-2.png" alt="" class="li_img_pri"><p class="li_p_pri">Lease type: '+ware_housa.lease_type+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Payable.png" alt="" class="li_img_pri"><p class="li_p_pri">Payable: '+ware_housa.payable+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Pernit.png" alt="" class="li_img_pri"><p class="li_p_pri">Permitted-use: '+ware_housa.permit+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark: '+ware_housa.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address: '+ware_housa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+ware_housa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City: '+ware_housa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+ware_housa.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert('oneemploy');
var oneemp=employimg_obj.document;
//alert('oneemp');
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40'){
  //alert('common details 42 44 46');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Address1+'</p><span class="pri_span">Address1</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Address2+'</p><span class="pri_span">Address2</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Taluk+'</p><span class="pri_span">Taluk</span></div>'
$('#sda_newin').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address1+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+common_addressa.registration_no+'&nbsp;To &nbsp;'+common_addressa.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Zipcode+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+common_addressa.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+common_addressa.Phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+common_addressa.Mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+common_addressa.permanent_regionsection+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+common_addressa.Permanent_City+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+common_addressa.Permanent_State+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '66' ){
  //alert('bankrupcy verification');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.branch_name+'</p><span class="pri_span">Branch Name</span></div>'
$('#sda_newin').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.name_institution+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+bankruptcy_deta.address+'&nbsp;To &nbsp;'+bankruptcy_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.pan_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.country+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.pincode+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Part Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Mode Of Operation:'+bankruptcy_deta.bk_mode+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+bankruptcy_deta.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code:'+bankruptcy_deta.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+bankruptcy_deta.pan_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Dealing:'+bankruptcy_deta.dof+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/turn-over.png" alt="" class="li_img_pri"><p class="li_p_pri">Turn-Over:'+bankruptcy_deta.trovr+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Bankruptcy:'+bankruptcy_deta.dobr+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-code.png" alt="" class="li_img_pri"><p class="li_p_pri">Case-Code:'+bankruptcy_deta.ccode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-type.png" alt="" class="li_img_pri"><p class="li_p_pri">case-type:'+bankruptcy_deta.ctype+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">case-Number:'+bankruptcy_deta.cano+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+bankruptcy_deta.add_one+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Documentsr.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+bankruptcy_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+bankruptcy_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+bankruptcy_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+bankruptcy_deta.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}


if(qualification_id == '69' ){
  //alert('identity verification');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.name_institution+'</p><span class="pri_span">Name of the Istitution</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.licence_no+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
$('#sda_newin').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.name_institution+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'


$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '39' ){
  //alert('credential verification');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential_name+'</p><span class="pri_span">Credential Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.valid+'</p><span class="pri_span">Vaild Upto</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.valid+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.pincode+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+credential_deta.name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Credentials Name:'+credential_deta.credential_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Credentials:'+credential_deta.credential+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thur:'+credential_deta.valid+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+credential_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+credential_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+credential_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+credential_deta.state+'</p></li>'


$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '56' ){
  //alert('distributor residential address verification');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.licenceno+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.valid+'</p><span class="pri_span">Valid Upto</span></div>'
$('#sda_newin').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+driving_lica.fname+'&nbsp;To &nbsp;'+driving_lica.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">Issued Name: '+driving_lica.issuename+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of issue: '+driving_lica.dateofissue+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thru: '+driving_lica.valid+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Father-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+driving_lica.fname+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri"> Address: '+driving_lica.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+driving_lica.Pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"> City: '+driving_lica.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+driving_lica.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '41' ){
  //alert('distributor details 41');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_date+'</p><span class="pri_span">Date of Registration</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.company_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.license_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.district+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Company_Name: '+dist_detailsa.company_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration_Number: '+dist_detailsa.registration_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration_Date: '+dist_detailsa.registration_date+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Commer-reg.png" alt="" class="li_img_pri"><p class="li_p_pri">Commercial Registration:'+dist_detailsa.cr_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Tin Number:'+dist_detailsa.tin_no+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+dist_detailsa.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+dist_detailsa.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark'+dist_detailsa.street+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District: '+dist_detailsa.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+dist_detailsa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+dist_detailsa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+dist_detailsa.state+'</p></li>'


$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
  //alert('reference');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.street+'</p><span class="pri_span">Street</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Address'+referencea.address+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+referencea.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+referencea.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+referencea.city+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+referencea.state+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Company_name:'+referencea.company_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/sq-feet.png" alt="" class="li_img_pri"><p class="li_p_pri">Employee Id:'+referencea.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Documentsr.png" alt="" class="li_img_pri"><p class="li_p_pri">Salary:'+referencea.salary+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+referencea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+referencea.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+referencea.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+referencea.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+referencea.state+'</p></li>'
$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}


if(qualification_id == '29' || qualification_id == '31' ){
  //alert('address verrrrrr');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.address+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.street+'</p><span class="pri_span">Street</span></div>'
$('#sda_newin').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.address+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '65' ){
  //alert('identity');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idname+'</p><span class="pri_span">ID Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idnumber+'</p><span class="pri_span">ID Number</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
$('#sda_newin').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+identity_deta.bank_name+'&nbsp;To &nbsp;'+identity_deta.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.idnumber+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.country+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Party Name:'+identity_deta.name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">ID Name:'+identity_deta.idname+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">ID Number:'+identity_deta.idnumber+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">issued office:'+identity_deta.idnumber+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thru:'+identity_deta.valid+'<br></p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '64' ){
  //alert('bank');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.branch_name+'</p><span class="pri_span">Branch Name</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.pan_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.country+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.pincode+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+bank_inpro.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code: '+bank_inpro.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+bank_inpro.pan_no+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+bank_inpro.add_one+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+bank_inpro.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">PinCode:'+bank_inpro.pincode+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+bank_inpro.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+bank_inpro.state+'</p></li>'

$('#lii_newin').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '63' ){
//alert('assest');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+user_obja.First_Name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.property_type+'</p><span class="pri_span">Property Type</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.doc_no+'</p><span class="pri_span">Document Number</span></div>'
$('#sda_newin').append(sd);


//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.property_type+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.sur_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.patta_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.pincode+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Property-type-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Property-Type: '+assest_inpro.property_type+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Survey Number:'+assest_inpro.sur_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Patta Number:'+assest_inpro.patta_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/sq-feet.png" alt="" class="li_img_pri"><p class="li_p_pri">Sq feet:'+assest_inpro.appx_sq+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">sub-register office:'+assest_inpro.sub_off+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

  var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


}

}

}


if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('employment');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Employment</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_id+'</p><span class="pri_span">Employer ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/saller_icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Sallery</span></div>'
$('#sda_newin').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_employment_records.working_from+'&nbsp;To &nbsp;'+currentobj_employment_records.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'

$('#lii_newin').append(liii);





var oneemploy = new Array(10);
k = -1;

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");

if(empimg == coordinator_id && empid == verification_user_id ){
//alert("if employimg_obj");
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");

//var oneemploy=employimg_obj.document;

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');



}

}

}

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('if education');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png"  class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newin').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newin').append(liii);



var oneemp = new Array(10);
j = -1;
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");
//alert(empid+'empid');
if(empimg == coordinator_id && empid == verification_user_id ) {

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

//var oneemp=employimg_obj.document;
j++;
oneemp[j]=employimg_obj.document;

if (j == 0 ){
  var one=oneemp[j];
//alert(one+'oneemp');
//$('.document_imag_inprooneqc').append('<img src="http://staging.eimpressive.com/uploads/'+one+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+one+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+one+'"  style="height: 300px;width:350px"></a></li>');


}
if (j == 1 ){
  var oneo=oneemp[j];
// alert(oneo+'two');
//$('.document_imag_inprooneqd').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}
if (j == 2 ){
  var oneo=oneemp[j];
//alert(oneo+'two');
//$('.document_imag_inprooneqb').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}
if (j == 3 ){
  var oneo=oneemp[j];
// alert(oneo+'two');
//$('.document_imag_inprooneqa').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}
if (j == 4 ){
  var oneo=oneemp[j];
//alert(oneo+'two');
//$('.document_imag_inprooneqe').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}
if (j == 5 ){
  var oneo=oneemp[j];
//alert(oneo+'two');
//$('.document_imag_inprooneqf').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}

//alert(currentobj_educational_records.from);

$('#from_o').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_educational_records.from+'</p><p class="sdap">'+currentobj_educational_records.to+'</p>');
$('#designation_o').html('<h1 class="sdah1">Qualification</h1><p class="sdap">'+user_obja.qualification_name+'</p>');
$('#percentage_o').html('<h1 class="sdah1">Percentage</h1><p class="sdap">'+currentobj_educational_records.percentage+'%</p>');
$('#year_of_passing_o').html('<h1 class="sdah1">year_of_passing</h1><p class="sdap">'+currentobj_educational_records.year_of_passing+'</p>');
$('#institute_inproo_o').text(currentobj_educational_records.institute_name);
$('#address_inproo_o').text(currentobj_educational_records.address);
$('#pincode_inproo_o').text(currentobj_educational_records.pincode);


}

}


}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){

$('.proof').hide();

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newin').append(liii);
 /* var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo_ratio"></span></a></li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo"> '+state+'</span></a></li>'
  $('#lii').append(liii);*/



var oneaddress = new Array(10);
j = -1;
//alert('if address id');
for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");

addressimg_obj = addressid_records_array[a];
// alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;

//alert(oneimg +'equal to'+ proof_type_id);
//alert(oneid +'equal to'+ verification_user_id);
if(oneimg == coordinator_id && oneid == verification_user_id ){
//alert("oneimg ======inside coordinator_id");
//alert("oneid ======inside verification_user_id");
//var oneproof=addressimg_obj.document_name;

var oneemp=addressimg_obj.document_name;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


j++;
oneaddress[j]=addressimg_obj.document_name;

if (j == 0 ){
  var one=oneaddress[j];
//alert(one+'oneemp');
//$('.document_imag_inprooneqc').append('<img src="http://staging.eimpressive.com/documents/addressid/'+one+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
$('.s').append('<li><a href="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+one+'"><img src="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+one+'"  style="height: 300px;width:350px"></a></li>');


}
if (j == 1 ){
  var oneo=oneaddress[j];
//alert(oneo+'two');
//$('.document_imag_inprooneqd').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
$('.s').append('<li><a href="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+oneo+'"><img src="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}
if (j == 2 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqb').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 3 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqa').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 4 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqe').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 5 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqf').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}


$('#institute_inproo_ratio').text(user_obja.qualification_name);
//   $('#address_inproo').text(currentobj_educational_records.address);
//$('#pincode_inproo').text(currentobj_educational_records.pincode);


}

}

}

$(document).off('click', '#inpro_to_verified').on('click', '#inpro_to_verified', function() { 
  var status_val_inpro=document.getElementById('status_val_inpro').value;
  var remark_inpro=document.getElementById('remark_inpro').value;
  var activity_log=document.getElementById('activity_log').value;
// var sdocument=document.getElementById('pgAddBookBookImage').value;
var sdocument=$('input[type=file]').val().split('\\').pop();
// var a = 'The Three Musketeers';
//b= a.substring(4, 9); 
//alert(b);
//alert(sdocument);


$.ajax({url: "http://staging.eimpressive.com/slim-cor/supervisor_status_to_verified.php?status_val_inpro="+status_val_inpro+"&verification_user_id="+verification_user_id+"&remark_inpro="+remark_inpro+"&coordinator_id="+coordinator_id+"&region_num="+region_num+"&activity_log="+activity_log+"&sdocument="+sdocument,
  data:$('#update_to_verified_inpro').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {

  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
      sessionStorage.setItem("new_verification_count_array",JSON.stringify(result[0]));
      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[1]));
      sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[2]));
      $.mobile.loading().hide();
      $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
//$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {    
  console.log(request);
  console.log(error);  
  $("#Network").popup("open");         
  alert('Network error has occurred please try again!');
}
});

});





}






});