function sumberDoksli() {
    const doksli = document.getElementById('bar-search').value.toLowerCase();
    const keyword = [
        "si imut dari laut jawa", "kapal karam"
    ];
    const dok1 = document.getElementById('dok1');

    if (keyword[0].includes(doksli)) {
        dok1.style.display = 'block';
    } else {
        dok1.style.display = 'none';
    }
 
    return false;
}
