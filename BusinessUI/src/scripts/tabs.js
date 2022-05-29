const tabContainers = document.querySelectorAll('.tabs');

for (const container of tabContainers) {
    const tabs = container.querySelectorAll('.tab__navitem');
    let activeTab;
    for (const tab of tabs) {
        if (tab.classList.contains('active')) {
            activeTab = tab;
        }
        tab.addEventListener('click', () => {
            activeTab.classList.remove('active');
            activeTab = tab;
            activeTab.classList.add('active');
        })
    }
}