const holidays = ['元日', '成人の日', '建国記念の日', '天皇誕生日', '春分の日', '昭和の日', '憲法記念日', 'みどりの日', 'こどもの日', '海の日', '山の日', '敬老の日', '春分の日', 'スポーツの日', '文化の日', '敬老感謝の日'];

// for文の場合
for (let i = 0; i < holidays.length; i++) {
    console.log(holidays[i])
}

// while文の場合
let i = 0
while(i < holidays.length) {
    console.log(holidays[i]);
    i++
}
