
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Marker {
  latitude: number;
  longitude: number;
  name: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  markers: Marker[] = [];
  selectedMarker!: Marker;
  markerForm: FormGroup;

  latitude = 37.7749;
  longitude = -122.4194;
  zoom = 12;

  constructor(private formBuilder: FormBuilder) {
    this.markerForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onMarkerClick(marker: Marker): void {
    this.selectedMarker = marker;
    this.markerForm.patchValue({ name: marker.name });
  }

  onSubmit(): void {
    if (this.markerForm.invalid) {
      return;
    }

    this.selectedMarker.name = this.markerForm.value.name;/*
    this.selectedMarker = null; */
  }

  onDelete(): void {
    this.markers = this.markers.filter((marker) => marker !== this.selectedMarker);/*
    this.selectedMarker = null; */
  }
}
