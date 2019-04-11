invertColors = (colors) => {
    if(!Array.isArray(colors)) colors = [colors];
    return colors.map(value => {
        if(value[0] === '#') value = value.slice(1);

        if(value.length === 3) value = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];
        else if(value.length === 4) value = value[0] + value[0] + value[1] + value[1] + value[2] + value[2] + value[3] + value[3];
        else if(value.length !== 6 && value.length !== 8) return '';

        let resValue = parseInt(value, 16);
        let resColor = '';
        while(resValue) {
            let curValue = 255 - resValue % 256;
            resColor = curValue = 0 ? '00' : curValue < 16 ? '0' : '' + curValue.toString(16) + resColor;
            resValue = Math.trunc(resValue / 256);
        }

        if(resColor) return '#' + ('000000' + resColor).slice(-value.length);
        else return '';
    })
        .filter(value => value.length);
};

console.log('ok');