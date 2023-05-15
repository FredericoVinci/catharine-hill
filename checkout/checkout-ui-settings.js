const drawnInfoBrind = (param) => {
    const limitValueBrind = 200000;
    const valueActual = param.totalizers[0].value;

    var btn = document.querySelector('#cart-to-orderform');
    btn.style.display = 'block';


    if (valueActual < limitValueBrind && param.clientProfileData.isCorporate) {
        btn.style.display = 'none';
    }
};
$(window).on('orderFormUpdated.vtex', (evt, orderForm) => {
    if (orderForm.clientProfileData) {
        drawnInfoBrind(orderForm);
    }
});