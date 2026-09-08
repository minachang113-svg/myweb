document.addEventListener('DOMContentLoaded', () => {
  // 1. 年級分類篩選功能
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 切換按鈕 active 樣式
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.classList.contains(filterValue)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. Modal 彈出視窗功能
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalTags = document.getElementById('modal-tags');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.querySelector('.close-btn');

  projectCards.forEach(card => {
    const cardBtn = card.querySelector('.card-btn');
    cardBtn.addEventListener('click', () => {
      modalTitle.textContent = card.getAttribute('data-title');
      modalTags.textContent = "標籤：" + card.getAttribute('data-tags');
      modalDesc.textContent = card.getAttribute('data-desc');
      modal.style.display = 'flex';
    });
  });

  // 關閉 Modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});