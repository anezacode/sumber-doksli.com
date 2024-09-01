function sumberDoksli() {
    const doksli = document.getElementById('bar-search').value.trim().toLowerCase();
    const keyword = [
        "si imut dari laut jawa",
        "kapal karam"
    ];
    const dok1 = document.getElementById('dok1');

    if (doksli.length > 0 && keyword[0].includes(doksli)) {
        dok1.style.display = 'block';
    } else {
        dok1.style.display = 'none';
    }
 
    return false;
}
