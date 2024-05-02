import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent {
  @Output() selectedFilterChange = new EventEmitter<string>();

  options = [
    { label: 'За рейтингом', value: 'byRating' },
    { label: 'Від дешевих до дорогих', value: 'cheapToExpensive'},
    { label: 'Від дорогих до дешевих', value: 'expensiveToCheap' },
    { label: 'Новинки', value: 'newArrivals' },
    { label: 'Хіти', value: 'bestSellers' },
  ];

  filterFormGroup = new FormGroup({
    selectedFilter: new FormControl(this.options[0].value),
  });

  onFilterChange(): void {
    const selectedFilterValue = this.filterFormGroup.get('selectedFilter')?.value || undefined;
    this.selectedFilterChange.emit(selectedFilterValue);
  }
}
