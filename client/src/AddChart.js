import React from 'react';

export default function AddChart() {
	return (
		<div>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Add Another
			</button>

			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">

						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">New Chart</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div className="modal-body">
							<input placeholder="name" />
							<input placeholder="discription"/>
						</div>

						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-primary">Create</button>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}
