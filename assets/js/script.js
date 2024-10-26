// Atualiza ano copyright footer
const currentYear = new Date().getFullYear();
document.getElementById('date').textContent = currentYear;

// Botao de copiar email
function copyEmail() {
    const copyEmailBtn = document.querySelector(".copy-btn");
    const copyEmailBtnText = copyEmailBtn.innerHTML
    const email = document.querySelector('.email')

    copyEmailBtn.disabled = true
    
    navigator.clipboard.writeText(copyEmailBtn.value)
        .then(() => {
            copyEmailBtn.classList.add('copied')
            copyEmailBtn.innerHTML = 'Email copiado!'
            email.classList.add('sucess')
            setTimeout(() => {
                copyEmailBtn.classList.remove('copied');
                copyEmailBtn.innerHTML = copyEmailBtnText
                email.classList.remove('sucess')

                copyEmailBtn.disabled = false
            }, 2000);
        })
        .catch(err => {
            alert("Erro ao copiar: " + err);
            copyEmailBtn.disabled = false
        });
}

// Calculadora tempo das experiencias
class DateCalculator{
    constructor(startDateStr, endDateStr) {
        this.startDate = new Date(startDateStr);
        this.endDate = new Date(endDateStr);
    }

    calcDifference() {
        const yearsDifference = this.endDate.getFullYear() - this.startDate.getFullYear();
        const monthsDifference = this.endDate.getMonth() - this.startDate.getMonth();

        let totalMonths = monthsDifference + (yearsDifference * 12);
        
        if (this.endDate.getDate() < this.startDate.getDate()) {
            totalMonths--;
        }

        if (totalMonths >= 12) {
            return {
                years: Math.floor(totalMonths / 12),
                months: totalMonths % 12,
            };
        } else {
            return {
                months: totalMonths,
            };
        }
    }
}

function spanTimePeriod() {
    const startDateCNC = '2024-06-17';
    const endDateCNC = new Date(); 

    const dateTimeCNC = new DateCalculator(startDateCNC, endDateCNC);
    const resultadoCNC = dateTimeCNC.calcDifference();

    const cncDateTimeSpan = document.querySelector('.date-time-cnc');
    if (resultadoCNC.years) {
        cncDateTimeSpan.textContent = `${resultadoCNC.years} ${resultadoCNC.years === 1 ? 'ano' : 'anos'} ${resultadoCNC.months} ${resultadoCNC.months === 1 ? 'mês' : 'meses'}`;
    } else {
        cncDateTimeSpan.textContent = `${resultadoCNC.months} ${resultadoCNC.months === 1 ? 'mês' : 'meses'}`;
    }
}

window.onload = spanTimePeriod;