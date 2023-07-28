export function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export function handleClick(arg) {
    if (arg.classList.contains("active")) {
        arg.classList.remove("active")
        arg.classList.add("close")
    } else if (!arg.classList.contains("active")) {
        arg.classList.remove("close")
        arg.classList.add("active")
    }
}

export function populateTable(arr, place) {
    place.innerHTML = ""
    for (let item of arr) {
        const row = place.insertRow(-1);
        const id = row.insertCell(0);
        const cart_type = row.insertCell(1);
        const descriptionCell = row.insertCell(2);
        const amountCell = row.insertCell(3);
        const dateCell = row.insertCell(4);

        id.innerHTML = item.id;
        cart_type.innerHTML = item.wallet.name;
        dateCell.innerHTML = formatDays(getDaysRemaining(item.date));
        descriptionCell.innerHTML = item.category;
        amountCell.innerHTML = item.total.toFixed(2);


        row.append(id, cart_type, descriptionCell, amountCell, dateCell)
        place.append(row)
    }
}

export function getDaysRemaining(targetDateString) {
    const targetDate = new Date(targetDateString);
    const currentDate = new Date();

    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
}


export function formatDays(numDays) {
  if (numDays === 0) {
    return "Сегодня";
  } else if (numDays === 1) {
    return "Завтра";
  } else if (numDays === -1) {
    return "Вчера";
  } else if (numDays > 1) {
    return `Через ${numDays} ${getDayText(numDays)}`;
  } else {
    return `${Math.abs(numDays)} ${getDayText(numDays)} назад`;
  }
}

function getDayText(numDays) {
  const lastDigit = Math.abs(numDays) % 10;
  if (lastDigit === 1 && Math.abs(numDays) !== 11) {
    return "день";
  } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(Math.abs(numDays))) {
    return "дня";
  } else {
    return "дней";
  }
}

