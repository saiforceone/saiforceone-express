import React from 'react';
import type { FC } from 'react';
import { ListPageWrapper } from '~/pageComponents/ListPageWrapper/ListPageWrapper';
import type { Shipment } from '@prisma/client';
import { ShipmentFilter } from '~/components/shipment/ShipmentFilter/ShipmentFilter';
import type { SelectOption } from '~/shared/interfaces/uiElements.interface';
import { ShipmentCard } from '~/components/shipment/ShipmentCard/ShipmentCard';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';

interface ShipmentListPageProps {
  showContentRight?: boolean;
  statusOptions: SelectOption[];
  shipments: Shipment[];
}

export const ShipmentListPage: FC<ShipmentListPageProps> = ({
  showContentRight,
  statusOptions,
  shipments,
}) => {
  const ShipmentElements = shipments.length ? (
    shipments.map((shipment) => (
      <ShipmentCard
        active={false}
        key={shipment.id}
        shipment={shipment}
        shipmentCategory={''}
        shipmentStatuses={[]}
      />
    ))
  ) : (
    <NoDataCard primaryText="No Shipments Found..." />
  );

  return (
    <ListPageWrapper
      contentLeft={ShipmentElements}
      contentLeftHeader={<ShipmentFilter statusOptions={statusOptions} />}
      contentRight={<p>Shipment detail</p>}
      pageTitle="Shipments"
      showContentRightOnly={false}
    />
  );
};
